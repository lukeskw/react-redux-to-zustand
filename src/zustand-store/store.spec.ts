import { beforeEach, describe, expect, it } from 'vitest'
import { useStore } from '.'

const course = {
  id: 1,
  modules: [
    {
      id: 1,
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
      id: 2,
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
}

const initialState = useStore.getState()

describe('zustand store', () => {
  beforeEach(() => {
    useStore.setState(initialState)

    useStore.setState({ course })
  })

  it('should be able to play the video', () => {
    const { play } = useStore.getState()

    play([1, 3])

    const { currentLessonIdx, currentModuleIdx } = useStore.getState()

    expect(currentModuleIdx).toEqual(1)
    expect(currentLessonIdx).toEqual(3)
  })

  it('should be able to play next video automatically', () => {
    const { next } = useStore.getState()
    next()

    const { currentLessonIdx, currentModuleIdx } = useStore.getState()

    expect(currentModuleIdx).toEqual(0)
    expect(currentLessonIdx).toEqual(1)
  })

  it('should be able to jump to the next module automatically', () => {
    const { next } = useStore.getState()

    useStore.setState({ currentLessonIdx: 5 })

    next()

    const { currentLessonIdx, currentModuleIdx } = useStore.getState()

    expect(currentModuleIdx).toEqual(1)
    expect(currentLessonIdx).toEqual(0)
  })

  it('should not be able to jump to the next module automatically', () => {
    const { next } = useStore.getState()

    useStore.setState({ currentModuleIdx: 1, currentLessonIdx: 4 })

    next()

    const { currentLessonIdx, currentModuleIdx } = useStore.getState()

    expect(currentModuleIdx).toEqual(1)
    expect(currentLessonIdx).toEqual(4)
  })
})
