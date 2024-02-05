import { describe, it, expect } from 'vitest'
import { player as reducer, playerSlice, play, next } from './player'

describe('player slice', () => {
  it('should be able to play the video', () => {
    const initialState = playerSlice.getInitialState()
    const state = reducer(initialState, play([1, 3]))

    expect(state.currentModuleIdx).toEqual(1)
    expect(state.currentLessonIdx).toEqual(3)
  })

  it('should be able to play next video automatically', () => {
    const initialState = playerSlice.getInitialState()
    const state = reducer(initialState, next())

    expect(state.currentModuleIdx).toEqual(0)
    expect(state.currentLessonIdx).toEqual(1)
  })

  it('should be able to jump to the next module automatically', () => {
    const initialState = playerSlice.getInitialState()
    const state = reducer(
      {
        ...initialState,
        currentLessonIdx: 5,
      },
      next(),
    )

    expect(state.currentModuleIdx).toEqual(1)
    expect(state.currentLessonIdx).toEqual(0)
  })

  it('should not be able to jump to the next module automatically', () => {
    const initialState = playerSlice.getInitialState()
    const state = reducer(
      {
        ...initialState,
        currentModuleIdx: 1,
        currentLessonIdx: 4,
      },
      next(),
    )

    expect(state.currentModuleIdx).toEqual(1)
    expect(state.currentLessonIdx).toEqual(4)
  })
})
