const TELEGRAM_URL = "https://t.me/clinic_growth_team";

export function FinalCTA() {
  return (
    <section className="bg-slate-900">
      <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            Каждый день без обработки обращений - это прямые потери выручки
          </h2>
          <p className="mt-4 text-base text-slate-200 sm:text-lg">
            Напишите сегодня: за 1 день запустим обработку обращений и покажем,
            сколько пациентов и денег можно вернуть в запись уже в этом месяце.
          </p>
          <a
            href={TELEGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-200 sm:text-base"
          >
            Разобрать в Telegram, где вы теряете пациентов
          </a>
        </div>
      </div>
    </section>
  );
}
