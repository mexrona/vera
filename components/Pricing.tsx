const TELEGRAM_URL = "https://t.me/clinic_growth_team";

export function Pricing() {
  return (
    <section className="bg-slate-50">
      <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
          Простой пилотный тариф
        </h2>
        <div className="mt-8 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <p className="text-sm font-medium uppercase tracking-wide text-slate-500">
            Пилот на 30 дней
          </p>
          <p className="mt-3 text-4xl font-bold text-slate-900">35 000 ₽</p>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-base">
            Подключение, настройка и ежедневная обработка входящих обращений.
            Вы видите результат в записях и принимаете решение о масштабировании.
          </p>
          <p className="mt-6 rounded-xl bg-emerald-50 p-4 text-sm text-emerald-800 sm:text-base">
            1 новый пациент в среднем приносит 12 000-20 000 ₽. Тариф окупается
            за первые заявки.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <a
              href={TELEGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex justify-center rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-700 sm:text-base"
            >
              Написать в Telegram
            </a>
            <a
              href={TELEGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex justify-center rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-100 sm:text-base"
            >
              Обсудить условия
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
