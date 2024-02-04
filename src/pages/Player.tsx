import { MessageCircle } from 'lucide-react'

import { Header } from '../components/Header'
import { VideoPlayer } from '../components/VideoPlayer'
import { CourseModule } from '../components/CourseModule'
import { useAppSelector } from '../store'
import { useCurrentCourse } from '../hooks/useCurrentCourse'
import { useEffect } from 'react'

export function Player() {
  const modules = useAppSelector((state) => {
    return state.player.course.modules
  })

  const { currentLesson } = useCurrentCourse()

  useEffect(() => {
    document.title = `Watching: ${currentLesson.title}`
  }, [currentLesson])

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
            {modules.map((module, index) => {
              return (
                <CourseModule
                  key={crypto.randomUUID()}
                  title={module.title}
                  moduleIndex={index}
                  lessonsAmount={module.lessons.length}
                />
              )
            })}
          </aside>
        </main>
      </div>
    </div>
  )
}
