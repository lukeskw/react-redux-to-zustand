import { useAppSelector } from '../store'

export function useCurrentCourse() {
  return useAppSelector((state) => {
    const { currentModuleIdx, currentLessonIdx } = state.player

    const currentModule = state.player.course.modules[currentModuleIdx]

    const currentLesson = currentModule.lessons[currentLessonIdx]

    return { currentModule, currentLesson }
  })
}
