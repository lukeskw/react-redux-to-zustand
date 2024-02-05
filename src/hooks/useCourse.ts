import { useState, useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../store'

export function useCourse(moduleIndex: number) {
  const appDispatch = useAppDispatch()

  const { lessons, currentLessonIdx, currentModuleIdx, isPending } =
    useAppSelector((state) => {
      const { currentLessonIdx, currentModuleIdx, isPending } = state.player
      const lessons = state.player.course?.modules[moduleIndex].lessons
      return { lessons, currentLessonIdx, currentModuleIdx, isPending }
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
    appDispatch,
    isPending,
  }
}
