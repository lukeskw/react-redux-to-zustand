import {
  PayloadAction,
  createSlice,
  createAsyncThunk,
  isPending,
} from '@reduxjs/toolkit'
import { PlayerState } from '../../interfaces/IPlayerState'
import { api } from '../../lib/axios'

const initialState: PlayerState = {
  course: null,
  currentModuleIdx: 0,
  currentLessonIdx: 0,
  isPending: true,
}

export const loadCourseData = createAsyncThunk('player/load', async () => {
  const response = await api.get('/courses/1')

  return response.data
})

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
  extraReducers(builder) {
    builder.addCase(loadCourseData.pending, (state) => {
      state.isPending = true
    })

    builder.addCase(loadCourseData.fulfilled, (state, action) => {
      state.course = action.payload
      state.isPending = false
    })
  },
})

export const player = playerSlice.reducer

export const { play, next } = playerSlice.actions
