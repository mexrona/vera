const sharp = require("sharp");
const path = require("path");

const SRC = path.resolve(
  "C:/Users/User/.cursor/projects/c-dev-projects-vera/assets/c__Users_User_AppData_Roaming_Cursor_User_workspaceStorage_4b32e0552940e65829674a59bb94f4e5_images_dental-flow-1a1d5e6d-4bae-4cf1-a524-56d865862ef2.png",
);
const OUT = path.resolve("app/icon.png");

const SIZE = 512;
const RADIUS = 96;
const PADDING = 48;
const BG = { r: 255, g: 255, b: 255, alpha: 1 };

async function findToothBbox() {
  const { data, info } = await sharp(SRC)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const { width, height, channels } = info;
  const threshold = 240;
  const yMax = 575;

  let minX = width, maxX = 0, minY = height, maxY = 0;
  for (let y = 0; y < yMax; y++) {
    for (let x = 0; x < width; x++) {
      const i = (y * width + x) * channels;
      if (data[i] < threshold || data[i + 1] < threshold || data[i + 2] < threshold) {
        if (x < minX) minX = x;
        if (y < minY) minY = y;
        if (x > maxX) maxX = x;
        if (y > maxY) maxY = y;
      }
    }
  }
  return { minX, minY, maxX, maxY, width, height };
}

async function main() {
  const bbox = await findToothBbox();
  console.log("tooth bbox:", bbox);

  const margin = 16;
  const left = Math.max(0, bbox.minX - margin);
  const top = Math.max(0, bbox.minY - margin);
  const right = Math.min(bbox.width, bbox.maxX + margin);
  const bottom = Math.min(575, bbox.maxY + margin);
  const cropW = right - left;
  const cropH = bottom - top;

  console.log(`crop: left=${left}, top=${top}, w=${cropW}, h=${cropH}`);

  const innerSize = SIZE - PADDING * 2;
  const cropped = await sharp(SRC)
    .extract({ left, top, width: cropW, height: cropH })
    .resize(innerSize, innerSize, { fit: "contain", background: BG })
    .toBuffer();

  const composed = await sharp({
    create: { width: SIZE, height: SIZE, channels: 4, background: BG },
  })
    .composite([{ input: cropped, gravity: "center" }])
    .png()
    .toBuffer();

  const mask = Buffer.from(
    `<svg xmlns="http://www.w3.org/2000/svg" width="${SIZE}" height="${SIZE}">
       <rect x="0" y="0" width="${SIZE}" height="${SIZE}" rx="${RADIUS}" ry="${RADIUS}" fill="white"/>
     </svg>`,
  );

  await sharp(composed)
    .composite([{ input: mask, blend: "dest-in" }])
    .png()
    .toFile(OUT);

  const outMeta = await sharp(OUT).metadata();
  console.log(`written ${OUT}: ${outMeta.width}x${outMeta.height}`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
