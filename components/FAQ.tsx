const faqs = [
  {
    question: "Как быстро запускается работа?",
    answer:
      "Обычно запуск занимает 1 рабочий день: собираем вводные, согласовываем сценарий и начинаем обработку обращений.",
  },
  {
    question: "Мне нужно что-то технически настраивать?",
    answer:
      "Нет. Мы берем настройку на себя и даем вам понятный формат взаимодействия без сложных действий.",
  },
  {
    question: "Что именно вы делаете в рамках услуги?",
    answer:
      "Обрабатываем входящие обращения, быстро выходим на контакт с пациентом и передаем клинике подготовленные обращения для записи.",
  },
  {
    question: "Подходит ли это для маленькой клиники?",
    answer:
      "Да, сервис рассчитан на клиники с 1-5 врачами, где особенно важно не терять каждый входящий запрос.",
  },
  {
    question: "Что если в моем случае это не сработает?",
    answer:
      "Мы запускаем пилот и оцениваем результат на ваших данных. Если эффекта нет, честно обсуждаем, почему и стоит ли продолжать.",
  },
  {
    question: "Как я пойму, что есть результат?",
    answer:
      "Вы видите количество обработанных обращений и сколько из них дошло до записи. Все прозрачно и без сложных отчетов.",
  },
];

export function FAQ() {
  return (
    <section>
      <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
          Частые вопросы
        </h2>
        <div className="mt-8 space-y-4">
          {faqs.map((faq) => (
            <article
              key={faq.question}
              className="rounded-2xl border border-slate-200 bg-white p-5"
            >
              <h3 className="text-base font-semibold text-slate-900 sm:text-lg">
                {faq.question}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600 sm:text-base">
                {faq.answer}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
