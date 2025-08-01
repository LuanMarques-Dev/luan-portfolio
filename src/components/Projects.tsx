"use client"

import { useLanguage } from "@/contexts/LanguageContext"
import { lang } from "@/lib/lang"

export default function Projects() {
  const { language } = useLanguage()

  const projects = [
    {
      title: lang[language].projectsList[0].title,
      description: lang[language].projectsList[0].description,
      techs: ["HTML", "CSS", "JavaScript", "Next.js", "TailwindCSS"],
      link: "https://luanmarquesdev.com.br/"
    },
    {
      title: lang[language].projectsList[1].title,
      description: lang[language].projectsList[1].description,
      techs: ["HTML", "CSS", "JavaScript"],
      link: "https://github.com/LuanMarques-Dev/hairday"
    },
    {
      title: lang[language].projectsList[2].title,
      description: lang[language].projectsList[2].description,
      techs: ["HTML", "CSS"],
      link: "https://github.com/LuanMarques-Dev/ld-patins"
    }
  ]

  return (
    <div className="bg-black/20 border border-white/10 rounded-xl p-6">
      <h2 className="text-lg font-semibold mb-4">{lang[language].projects}</h2>
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
              aria-label={`${lang[language].seeProject} ${project.title}`}
            >
              {lang[language].seeProject} →
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}
