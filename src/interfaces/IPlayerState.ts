import { Course } from './ICourse'

export interface PlayerState {
  course: Course | null
  currentModuleIdx: number
  currentLessonIdx: number
  isPending?: boolean
}

export interface PlayerStateZustand {
  course: Course | null
  currentModuleIdx: number
  currentLessonIdx: number
  isPending: boolean

  load: () => Promise<void>
  play: ([moduleIdx, lessonIdx]: [number, number]) => void
  next: () => void
}
