const problems = [
  {
    title: "Пропущенные звонки",
    text: "В часы пик клиника часто теряет 3-5 звонков в неделю: пациент не дозванивается и уходит в соседнюю клинику.",
  },
  {
    title: "Медленные ответы",
    text: "Если ответ на заявку приходит через 30-60 минут, часть людей уже записывается к конкурентам в тот же день.",
  },
  {
    title: "Потерянные заявки",
    text: "Из-за смен и разных каналов теряется еще 2-4 обращения в неделю, по которым никто не перезвонил.",
  },
];

export function Problem() {
  return (
    <section className="border-y border-slate-200 bg-slate-50">
      <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
          Каждое необработанное обращение - это потерянные деньги
        </h2>
        <p className="mt-4 max-w-3xl text-base text-slate-600 sm:text-lg">
          Реалистичный сценарий для клиники на 1-5 врачей: минус 5-9 пациентов в
          неделю и минус 120 000-320 000 ₽ выручки в месяц только из-за
          пропущенных и поздно обработанных обращений.
        </p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {problems.map((problem) => (
            <article
              key={problem.title}
              className="rounded-2xl border border-slate-200 bg-white p-5"
            >
              <h3 className="text-lg font-semibold text-slate-900">
                {problem.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600 sm:text-base">
                {problem.text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
