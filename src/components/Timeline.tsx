"use client"

export default function Timeline() {
  const events = [
    { date: "Jan 2021", title: "Início no suporte de TI", description: "Comecei a trabalhar com suporte técnico." },
    { date: "Jul 2022", title: "Início da graduação", description: "Curso de ADS – 2 anos e 6 meses." },
    { date: "Dez 2024", title: "Formado 🎓", description: "Concluí a graduação com foco em dev." },
    { date: "Jun 2025", title: "Full Stack Rocketseat", description: "Começo da formação com JS, Node, React e Next." },
    { date: "Jul 2025", title: "Portfólio Profissional", description: "Criação do portfólio com Next.js, Tailwind e design responsivo." }
  ]

  const repeatedEvents = [...events, ...events]

  return (
    <div className="bg-black/20 border border-white/10 rounded-xl p-6 overflow-hidden h-80">
      <div className="animate-scroll flex flex-col gap-6 motion-reduce:animate-none">
        {repeatedEvents.map((event, index) => (
          <section key={`${event.title}-${index}`} className="relative pl-4 border-l border-zinc-600" aria-label={`Evento: ${event.title}`}>
            <span className="absolute -left-2 top-1 w-3 h-3 bg-white rounded-full" />
            <div className="text-sm">
              <p className="text-zinc-400">{event.date}</p>
              <p className="font-medium">{event.title}</p>
              <p className="text-zinc-300">{event.description}</p>
            </div>
          </section>
        ))}
      </div>
    </div>
  )
}
