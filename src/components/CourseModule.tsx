import { ChevronDown } from 'lucide-react'
import { Lesson } from './Lesson'

interface ICourseModuleProps {
  title: string
  lessonsAmount: number
  moduleIndex: number
}

export function CourseModule({
  title,
  lessonsAmount,
  moduleIndex,
}: ICourseModuleProps) {
  return (
    <div className="">
      <button className="flex w-full items-center gap-3 bg-zinc-700 p-4">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-900 text-xs">
          {moduleIndex + 1}
        </div>
        <div className="flex flex-col gap-1 text-left">
          <strong className="text-sm">{title}</strong>
          <span className="text-xs text-zinc-400">{lessonsAmount} lessons</span>
        </div>
        <ChevronDown className="ml-auto h-5 w-5 text-zinc-400" />
      </button>

      <nav className="relative flex flex-col gap-4 p-6">
        <Lesson title="Redux Fundamentals" duration="16:32" />
        <Lesson title="Redux Fundamentals part 2" duration="14:36" />
        <Lesson title="Reducers" duration="10:44" />
        <Lesson title="Actions" duration="12:27" />
      </nav>
    </div>
  )
}
