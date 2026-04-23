import Image from "next/image";
import Link from "next/link";

const TELEGRAM_URL = "https://t.me/clinic_growth_team";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" aria-label="DentalFlow" className="inline-flex items-center">
          <Image
            src="/dentalflow-logo.png"
            alt="DentalFlow"
            width={180}
            height={56}
            priority
            className="h-10 w-auto sm:h-12"
          />
        </Link>
        <a
          href={TELEGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-700"
        >
          Написать в Telegram
        </a>
      </div>
    </header>
  );
}
