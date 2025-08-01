// src/app/page.tsx
import ProfileCard from "@/components/ProfileCard"
import Timeline from "@/components/Timeline"
import FavoriteTools from "@/components/FavoriteTools"
import Projects from "@/components/Projects"
import MainProject from "@/components/MainProject"

export default function Home() {
  return (
    <main className="min-h-screen px-4 py-10 bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-950 text-white">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-1 space-y-6">
          <ProfileCard />
          <FavoriteTools />
        </div>
        <div className="md:col-span-2 space-y-6">
          <Timeline />
          <MainProject />
          <Projects />
        </div>
      </div>
    </main>
  )
}
