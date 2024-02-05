import { useAppDispatch, useAppSelector } from '../store'

export function useCurrentCourse() {
  const appDispatch = useAppDispatch()

  return useAppSelector((state) => {
    const { currentModuleIdx, currentLessonIdx, isPending } = state.player

    const currentModule = state.player.course?.modules[currentModuleIdx]

    const currentLesson = currentModule?.lessons[currentLessonIdx]

    return { currentModule, currentLesson, appDispatch, isPending }
  })
}
