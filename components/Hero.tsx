const TELEGRAM_URL = "https://t.me/clinic_growth_team";

export function Hero() {
  return (
    <section className="mx-auto w-full max-w-6xl px-4 pb-16 pt-14 sm:px-6 lg:px-8 lg:pt-20">
      <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
        <div className="space-y-6">
          <p className="inline-block rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
            Для стоматологий 1-5 врачей
          </p>
          <h1 className="text-3xl font-bold leading-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Перестаньте терять пациентов из-за пропущенных обращений
          </h1>
          <p className="max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg">
            Мы быстро и стабильно обрабатываем входящие звонки, сообщения и
            заявки, чтобы клиника получала больше записей без перегрузки
            администраторов.
          </p>
          <a
            href={TELEGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-700 sm:text-base"
          >
            Написать в Telegram
          </a>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
          <div className="mb-4 flex items-center justify-between">
            <span className="text-sm font-semibold text-slate-900">
              Контроль обращений
            </span>
            <span className="rounded-full bg-emerald-50 px-2 py-1 text-xs font-medium text-emerald-700">
              Онлайн
            </span>
          </div>
          <div className="space-y-3">
            {[
              "Пропущенный звонок в 10:42 - обработан за 4 минуты",
              "Заявка с сайта - пациенту предложено 2 окна",
              "Сообщение в мессенджере - подтверждена запись на завтра",
            ].map((item) => (
              <div
                key={item}
                className="rounded-xl border border-slate-200 bg-slate-50 p-3 text-sm text-slate-700"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
