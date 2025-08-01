// components/FavoriteTools.tsx
import { FaReact, FaNodeJs, FaGitAlt, FaLinux } from "react-icons/fa"
import { SiTailwindcss, SiJavascript } from "react-icons/si"

export default function FavoriteTools() {
  return (
    <div className="bg-black/20 border border-white/10 rounded-xl p-6">
      <h2 className="text-lg font-semibold mb-4">Minhas Techs Favoritas</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 text-center text-white text-sm">
        <div className="flex flex-col items-center" aria-label="React">
          <FaReact size={28} className="text-cyan-400" />
          React
        </div>
        <div className="flex flex-col items-center" aria-label="Node.js">
          <FaNodeJs size={28} className="text-green-500" />
          Node.js
        </div>
        <div className="flex flex-col items-center" aria-label="Tailwind CSS">
          <SiTailwindcss size={28} className="text-sky-400" />
          Tailwind
        </div>
        <div className="flex flex-col items-center" aria-label="JavaScript">
          <SiJavascript size={28} className="text-yellow-400" />
          JavaScript
        </div>
        <div className="flex flex-col items-center" aria-label="Git">
          <FaGitAlt size={28} className="text-orange-500" />
          Git
        </div>
        <div className="flex flex-col items-center" aria-label="Linux">
          <FaLinux size={28} className="text-gray-300" />
          Linux
        </div>
      </div>
    </div>
  )
}