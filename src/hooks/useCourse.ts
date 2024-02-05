import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useAppSelector } from '../store'

export function useCourse(moduleIndex: number) {
  const dispatch = useDispatch()

  const { lessons, currentLessonIdx, currentModuleIdx } = useAppSelector(
    (state) => {
      const { currentLessonIdx, currentModuleIdx } = state.player
      const lessons = state.player.course?.modules[moduleIndex].lessons
      return { lessons, currentLessonIdx, currentModuleIdx }
    },
  )

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
    dispatch,
  }
}
