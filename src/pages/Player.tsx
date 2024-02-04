import { MessageCircle } from 'lucide-react'

import { Header } from '../components/Header'
import { VideoPlayer } from '../components/VideoPlayer'
import { CourseModule } from '../components/CourseModule'

export function Player() {
  return (
    <div className="flex h-screen items-center justify-center bg-zinc-900 text-zinc-50">
      <div className="w-main-container flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <Header />
          <button
            type="button"
            className="flex items-center gap-2 rounded bg-violet-500 px-3 py-2 text-sm font-medium text-white hover:bg-violet-600"
          >
            <MessageCircle className="h-4 w-4" />
            Give feedback
          </button>
        </div>
        <main className="relative flex overflow-hidden rounded-lg border border-zinc-700 bg-zinc-800 pr-80 shadow">
          <div className="flex-1">
            <VideoPlayer />
          </div>
          <aside className="scrollbar-thin scrollbar-track-zinc-950 scrollbar-thumb-zinc-700 absolute bottom-0 right-0 top-0 w-80 divide-y-2 divide-zinc-900 overflow-y-scroll border-l border-zinc-700 bg-zinc-800">
            <CourseModule
              title="Unveiling Redux"
              moduleIndex={0}
              lessonsAmount={4}
            />
            <CourseModule
              title="Redux Toolkit"
              moduleIndex={1}
              lessonsAmount={4}
            />
            <CourseModule
              title="Redux Sagas"
              moduleIndex={2}
              lessonsAmount={4}
            />
          </aside>
        </main>
      </div>
    </div>
  )
}
