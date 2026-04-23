const steps = [
  {
    title: "1. Вы оставляете заявку",
    text: "Пишете нам в Telegram, коротко описываете текущую ситуацию и цели по записям.",
  },
  {
    title: "2. Мы настраиваем процесс",
    text: "Подключаем каналы обращений, согласовываем скрипт обработки и формат передачи контактов.",
  },
  {
    title: "3. Вы получаете готовые обращения",
    text: "Запуск за 1 день: клиника сразу получает обращения, по которым уже можно записывать пациентов.",
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
          Без сложного внедрения и длинных согласований.
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
