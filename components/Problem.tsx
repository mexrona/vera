const problems = [
  {
    title: "Пропущенные звонки",
    text: "Пациенты звонят в загруженные часы, не дозваниваются и записываются в другую клинику.",
  },
  {
    title: "Медленные ответы",
    text: "Когда ответ приходит через час или вечером, человек уже выбрал конкурента рядом.",
  },
  {
    title: "Потерянные заявки",
    text: "Обращения из разных каналов теряются между сменами, а повторный контакт не происходит.",
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
          Для небольшой стоматологии даже 8-12 потерянных пациентов в месяц
          часто означают минус 300 000-600 000 рублей потенциальной выручки.
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
