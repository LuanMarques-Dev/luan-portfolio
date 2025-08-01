// components/Projects.tsx
"use client"

export default function Projects() {
  const projects = [
    {
      title: "Portfólio Pessoal",
      description: "Site profissional responsivo com multilínguas, animações e foco em recrutadores.",
      techs: ["HTML", "CSS", "JavaScript", "Next.js", "TailwindCSS"],
      link: "https://luanmarquesdev.com.br/"
    },
    {
      title: "Hairday",
      description: "Agendamento simples para corte de cabelo.",
      techs: ["HTML", "CSS", "JavaScript"],
      link: "https://github.com/LuanMarques-Dev/hairday"
    },
    {
      title: "Patins",
      description: "Site simples para testar novas tecnologias do CSS.",
      techs: ["HTML", "CSS"],
      link: "https://github.com/LuanMarques-Dev/ld-patins"
    }
  ]

  return (
    <div className="bg-black/20 border border-white/10 rounded-xl p-6">
      <h2 className="text-lg font-semibold mb-4">Projetos Recentes</h2>
      <div className="space-y-4">
        {projects.map((project, index) => (
          <div key={`${project.title}-${index}`} className="border-l-2 border-zinc-600 pl-4">
            <h3 className="text-white font-medium">{project.title}</h3>
            <p className="text-zinc-400 text-sm">{project.description}</p>
            <div className="text-xs text-zinc-300 mt-1">
              Techs: {project.techs.join(", ")}
            </div>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-blue-400 hover:underline"
              aria-label={`Ver projeto ${project.title}`}
            >
              Ver projeto →
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}