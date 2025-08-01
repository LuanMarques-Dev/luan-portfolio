"use client"

import { useLanguage } from "@/contexts/LanguageContext"
import { lang } from "@/lib/lang"

export default function Timeline() {
  const { language } = useLanguage()

  const events = [
    {
      date: lang[language].timelineEvents[0].date,
      title: lang[language].timelineEvents[0].title,
      description: lang[language].timelineEvents[0].description
    },
    {
      date: lang[language].timelineEvents[1].date,
      title: lang[language].timelineEvents[1].title,
      description: lang[language].timelineEvents[1].description
    },
    {
      date: lang[language].timelineEvents[2].date,
      title: lang[language].timelineEvents[2].title,
      description: lang[language].timelineEvents[2].description
    },
    {
      date: lang[language].timelineEvents[3].date,
      title: lang[language].timelineEvents[3].title,
      description: lang[language].timelineEvents[3].description
    },
    {
      date: lang[language].timelineEvents[4].date,
      title: lang[language].timelineEvents[4].title,
      description: lang[language].timelineEvents[4].description
    }
  ]

  const repeatedEvents = [...events, ...events]

  return (
    <div className="bg-black/20 border border-white/10 rounded-xl p-6 overflow-hidden h-80">
      <h2 className="text-lg font-semibold mb-4">{lang[language].timeline}</h2>
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
