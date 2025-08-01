"use client"

import { useLanguage } from "@/contexts/LanguageContext"
import { lang } from "@/lib/lang"

export default function MainProject() {
  const { language } = useLanguage()

  return (
    <div className="bg-black/20 border border-white/10 rounded-xl p-6">
      <h2 className="text-lg font-semibold mb-4">{lang[language].mainProject}</h2>
      <div className="bg-zinc-800 rounded-lg overflow-hidden">
        <div
          role="img"
          aria-label={lang[language].mainProjectImageAria}
          className="h-48 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center text-white text-lg font-bold"
        >
          {lang[language].mainProjectTitle}
        </div>
        <div className="p-4 space-y-2">
          <p className="text-zinc-300 text-sm">
            {lang[language].mainProjectDescription}
          </p>
          <p className="text-xs text-zinc-400">
            Techs: Next.js, Node.js, TypeScript, PostgreSQL, TailwindCSS
          </p>
          <span className="inline-block mt-2 text-xs text-yellow-400 bg-yellow-900/40 px-2 py-1 rounded-full">
            🚧 {lang[language].inDevelopment}
          </span>
        </div>
      </div>
    </div>
  )
}
