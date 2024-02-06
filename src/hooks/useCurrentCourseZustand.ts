import { useStore } from '../zustand-store'

export function useCurrentCourseZustand() {
  return useStore((state) => {
    const { currentModuleIdx, currentLessonIdx, isPending, next } = state

    const currentModule = state.course?.modules[currentModuleIdx]

    const currentLesson = currentModule?.lessons[currentLessonIdx]

    return { currentModule, currentLesson, isPending, next }
  })
}
