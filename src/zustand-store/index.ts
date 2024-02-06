import { create } from 'zustand'
import { PlayerState } from '../interfaces/IPlayerState'
import { api } from '../lib/axios'

export const useStore = create<PlayerState>((set, get) => {
  return {
    course: null,
    currentLessonIdx: 0,
    currentModuleIdx: 0,
    isPending: true,

    load: async () => {
      set({ isPending: true })
      const response = await api.get('/courses/1')

      set({ course: response.data, isPending: false })
    },

    play: ([moduleIdx, lessonIdx]: [number, number]) => {
      set({
        currentModuleIdx: moduleIdx,
        currentLessonIdx: lessonIdx,
      })
    },
    next: () => {
      const { currentLessonIdx, currentModuleIdx, course } = get()
      const nextLessonIdx = currentLessonIdx + 1
      const nextLesson =
        course?.modules[currentModuleIdx].lessons[nextLessonIdx]

      if (nextLesson) {
        set({
          currentLessonIdx: nextLessonIdx,
        })
        return
      }
      const nextModuleIdx = currentModuleIdx + 1
      const nextModule = course?.modules[nextModuleIdx]

      if (nextModule) {
        set({
          currentModuleIdx: nextModuleIdx,
          currentLessonIdx: 0,
        })
      }
    },
  }
})
