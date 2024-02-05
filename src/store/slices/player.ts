import { PayloadAction, createSlice } from '@reduxjs/toolkit'

interface Course {
  id: number
  modules: Array<{
    id: number
    title: string
    lessons: Array<{
      id: string
      title: string
      duration: string
    }>
  }>
}

interface PlayerState {
  course: Course | null
  currentModuleIdx: number
  currentLessonIdx: number
}

const initialState: PlayerState = {
  course: null,
  currentModuleIdx: 0,
  currentLessonIdx: 0,
}

export const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {
    play: (state, action: PayloadAction<[number, number]>) => {
      state.currentModuleIdx = action.payload[0]
      state.currentLessonIdx = action.payload[1]
    },
    next: (state) => {
      const nextLessonIdx = state.currentLessonIdx + 1
      const nextLesson =
        state.course?.modules[state.currentModuleIdx].lessons[nextLessonIdx]

      if (nextLesson) {
        state.currentLessonIdx = nextLessonIdx
        return
      }
      const nextModuleIdx = state.currentModuleIdx + 1
      const nextModule = state.course?.modules[nextModuleIdx]

      if (nextModule) {
        state.currentModuleIdx = nextModuleIdx
        state.currentLessonIdx = 0
      }
    },
  },
})

export const player = playerSlice.reducer

export const { play, next } = playerSlice.actions
