"use client"

export default function MainProject() {
  return (
    <div className="bg-black/20 border border-white/10 rounded-xl p-6">
      <h2 className="text-lg font-semibold mb-4">Meu Projeto Principal</h2>
      <div className="bg-zinc-800 rounded-lg overflow-hidden">
        <div
          role="img"
          aria-label="Imagem ilustrativa do projeto E-commerce Pro"
          className="h-48 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center text-white text-lg font-bold"
        >
          E-commerce Pro ✨
        </div>
        <div className="p-4 space-y-2">
          <p className="text-zinc-300 text-sm">
            Plataforma de e-commerce moderna e escalável com foco em performance, experiência de compra e painel administrativo completo.
          </p>
          <p className="text-xs text-zinc-400">
            Techs: Next.js, Node.js, TypeScript, PostgreSQL, TailwindCSS
          </p>
          <span className="inline-block mt-2 text-xs text-yellow-400 bg-yellow-900/40 px-2 py-1 rounded-full">
            🚧 Em desenvolvimento
          </span>
        </div>
      </div>
    </div>
  )
}