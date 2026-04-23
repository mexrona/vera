const steps = [
  {
    title: "1. Вы оставляете заявку",
    text: "Пишете в Telegram 2-3 сообщения о текущем потоке обращений и где теряются пациенты.",
  },
  {
    title: "2. Мы настраиваем процесс",
    text: "За несколько часов подключаем ваши каналы, согласовываем сценарий и формат передачи контактов.",
  },
  {
    title: "3. Вы получаете готовые обращения",
    text: "Запуск за 1 день: вы получаете обращения, по которым можно сразу ставить пациента в расписание.",
  },
];

export function HowItWorks() {
  return (
    <section className="bg-slate-50">
      <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
          Как это работает
        </h2>
        <p className="mt-4 text-base text-slate-600 sm:text-lg">
          Быстрый старт без долгого внедрения: первые результаты уже в день запуска.
        </p>
        <div className="mt-8 grid gap-4 lg:grid-cols-3">
          {steps.map((step) => (
            <article
              key={step.title}
              className="rounded-2xl border border-slate-200 bg-white p-5"
            >
              <h3 className="text-lg font-semibold text-slate-900">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600 sm:text-base">
                {step.text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
