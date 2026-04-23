const testimonials = [
  {
    name: "Ольга, владелец клиники на 3 кресла",
    quote:
      "Раньше часть заявок терялась в течение дня. После запуска мы стали быстрее возвращаться к пациентам и видим больше записей на первичный прием.",
  },
  {
    name: "Артем, управляющий стоматологией",
    quote:
      "Понравилось, что все прозрачно: понимаем, какие обращения обработаны и кто уже готов записаться. Команда разгрузила администраторов в пиковые часы.",
  },
];

export function SocialProof() {
  return (
    <section>
      <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
          Пилот уже проходит в небольших клиниках
        </h2>
        <p className="mt-4 max-w-3xl text-base text-slate-600 sm:text-lg">
          Мы работаем с ранними подключениями и собираем кейсы на реальных
          процессах, без завышенных обещаний.
        </p>
        <div className="mt-8 grid gap-4 lg:grid-cols-2">
          {testimonials.map((item) => (
            <blockquote
              key={item.name}
              className="rounded-2xl border border-slate-200 bg-white p-5"
            >
              <p className="text-sm leading-relaxed text-slate-700 sm:text-base">
                &laquo;{item.quote}&raquo;
              </p>
              <footer className="mt-4 text-sm font-semibold text-slate-900">
                {item.name}
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
