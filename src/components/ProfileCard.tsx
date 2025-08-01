'use client'
import Image from 'next/image'
import { useLanguage } from '@/contexts/LanguageContext'
import { lang } from '@/lib/lang'

export default function ProfileCard() {
  const { language } = useLanguage()

  return (
    <div className="bg-gradient-to-br from-zinc-900 via-zinc-800 to-black border border-white/10 rounded-2xl p-8 flex flex-col items-center text-center shadow-xl">
      <Image
        src="/images/luan.jpeg"
        alt="Foto de Luan Marques"
        width={160}
        height={160}
        className="rounded-xl border-4 border-zinc-700"
      />
      <div className="mt-4">
        <h1 className="text-3xl font-bold text-white">Luan Marques 👋</h1>
        <p className="mt-2 text-zinc-400 text-sm max-w-xs mx-auto">
          {lang[language].greeting}
        </p>
      </div>

      <a
        href="/cv-luan-marques.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 inline-block bg-cyan-600 hover:bg-cyan-700 text-white text-sm font-medium px-4 py-2 rounded-lg transition"
      >
        {lang[language].resume}
      </a>

      <div className="flex gap-4 mt-4">
        <a
          href="https://github.com/LuanMarques-Dev"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Perfil no GitHub"
        >
          <Image src="/icons/github.svg" alt="GitHub" width={24} height={24} />
        </a>
        <a
          href="https://www.linkedin.com/in/luan-marques-pereira-125852205/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Perfil no LinkedIn"
        >
          <Image src="/icons/linkedin.svg" alt="LinkedIn" width={24} height={24} />
        </a>
      </div>
    </div>
  )
}
