const testimonials = [
  {
    name: "Ольга, владелец клиники на 3 кресла",
    quote:
      "За первые 2 недели вернули 7 пропущенных обращений в работу и получили 3 дополнительные записи на первичный прием.",
  },
  {
    name: "Артем, управляющий стоматологией",
    quote:
      "В вечерние часы раньше теряли входящие, сейчас заявки обрабатываются в день обращения и администраторы не захлебываются в пике.",
  },
];

export function SocialProof() {
  return (
    <section>
      <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
          Первые клиники уже тестируют сервис на реальном потоке
        </h2>
        <p className="mt-4 max-w-3xl text-base text-slate-600 sm:text-lg">
          Это ранний этап, но результаты уже измеримы: меньше потерянных
          обращений и больше записей без расширения штата.
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
