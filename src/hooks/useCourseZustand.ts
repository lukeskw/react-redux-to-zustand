import { useState, useEffect } from 'react'
import { useStore } from '../zustand-store'

export function useCourseZustand(moduleIndex: number) {
  const { lessons, currentLessonIdx, currentModuleIdx, isPending, play } =
    useStore((state) => {
      const { currentLessonIdx, currentModuleIdx, isPending, play } = state
      const lessons = state.course?.modules[moduleIndex].lessons
      return { lessons, currentLessonIdx, currentModuleIdx, isPending, play }
    })

  const [isOpen, setIsOpen] = useState(moduleIndex === currentModuleIdx)

  useEffect(() => {
    setIsOpen(moduleIndex === currentModuleIdx)
  }, [currentModuleIdx, moduleIndex])

  return {
    lessons,
    currentLessonIdx,
    currentModuleIdx,
    isOpen,
    setIsOpen,
    isPending,
    play,
  }
}
