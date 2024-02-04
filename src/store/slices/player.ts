import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { act } from 'react-dom/test-utils'

const playerSlice = createSlice({
  name: 'player',
  initialState: {
    course: {
      modules: [
        {
          id: '1',
          title: 'Getting Started with React',
          lessons: [
            { id: 'dQw4w9WgXcQ', title: 'CSS Modules', duration: '13:45' },
            { id: 'xVWeRnStdSA', title: 'Styling the Post', duration: '10:05' },
            {
              id: '_e9yMqmXWo0',
              title: 'Component: Header',
              duration: '06:33',
            },
            {
              id: 'zUkR6chwtOo',
              title: 'Component: Sidebar',
              duration: '09:12',
            },
            { id: '71NAThAf5yw', title: 'Global CSS', duration: '03:23' },
            { id: 'V_o52N2RR8c', title: 'Comment Form', duration: '11:34' },
          ],
        },
        {
          id: '2',
          title: 'Application Structure',
          lessons: [
            {
              id: 'Akwm2UZJ34o',
              title: 'Component: Comment',
              duration: '13:45',
            },
            { id: 'Fkk9DI-8el4', title: 'Responsiveness', duration: '10:05' },
            {
              id: '7zpxgyG7eGk',
              title: 'Interactions in JSX',
              duration: '06:33',
            },
            { id: 'Vy8moBcKVIM', title: 'Cow form', duration: '09:12' },
            { id: 'l60MnDJklnM', title: 'Using State', duration: '09:12' },
          ],
        },
      ],
    },
    currentModuleIdx: 0,
    currentLessonIdx: 0,
  },
  reducers: {
    play: (state, action: PayloadAction<[number, number]>) => {
      state.currentModuleIdx = action.payload[0]
      state.currentLessonIdx = action.payload[1]
    },
    next: (state) => {
      const nextLessonIdx = state.currentLessonIdx + 1
      const nextLesson =
        state.course.modules[state.currentModuleIdx].lessons[nextLessonIdx]

      if (nextLesson) {
        state.currentLessonIdx = nextLessonIdx
        return
      }
      const nextModuleIdx = state.currentModuleIdx + 1
      const nextModule = state.course.modules[nextModuleIdx]

      if (nextModule) {
        state.currentModuleIdx = nextModuleIdx
        state.currentLessonIdx = 0
      }
    },
  },
})

export const player = playerSlice.reducer

export const { play, next } = playerSlice.actions
