import { Course } from './ICourse'

export interface PlayerState {
  course: Course | null
  currentModuleIdx: number
  currentLessonIdx: number
  isPending: boolean
}
