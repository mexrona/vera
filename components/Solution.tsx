const points = [
  "Отвечаем на каждую заявку в течение 5-10 минут -> пациент не успевает уйти к конкурентам",
  "Перезваниваем по каждому пропущенному вызову -> клиника возвращает горячих пациентов в запись",
  "Уточняем запрос пациента и фиксируем детали -> администратор получает готовый контакт без лишних созвонов",
  "Доводим обращение до подтвержденной записи -> в расписании больше первичных приемов каждую неделю",
];

export function Solution() {
  return (
    <section>
      <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
          Что вы получаете вместо хаоса
        </h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {points.map((point) => (
            <div
              key={point}
              className="rounded-2xl border border-slate-200 bg-white p-5 text-sm text-slate-700 sm:text-base"
            >
              {point}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
