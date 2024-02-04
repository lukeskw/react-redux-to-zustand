import { useAppSelector } from '../store'

export function Header() {
  const { currentModule, currentLesson } = useAppSelector((state) => {
    const { currentModuleIdx, currentLessonIdx } = state.player

    const currentModule = state.player.course.modules[currentModuleIdx]

    const currentLesson = currentModule.lessons[currentLessonIdx]

    return { currentModule, currentLesson }
  })
  return (
    <div className="flex flex-col gap-1">
      <h1 className="text-2xl font-bold">{currentLesson.title}</h1>
      <span className="text-sm text-zinc-400">
        Module: {currentModule.title}
      </span>
    </div>
  )
}
