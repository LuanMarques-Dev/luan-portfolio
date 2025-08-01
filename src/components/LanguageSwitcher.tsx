// components/LanguageSwitcher.tsx
'use client'
import { useLanguage } from '@/contexts/LanguageContext'

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage()

  return (
    <div className="flex gap-2 mt-6 justify-center">
      {['pt-BR', 'en-US', 'ja-JP'].map((lang) => (
        <button
          key={lang}
          onClick={() => setLanguage(lang as any)}
          className={`px-3 py-1 text-sm rounded-lg ${
            language === lang
              ? 'bg-cyan-600 text-white'
              : 'bg-zinc-700 text-zinc-300 hover:bg-zinc-600'
          }`}
        >
          {lang}
        </button>
      ))}
    </div>
  )
}
