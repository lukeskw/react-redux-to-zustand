import { ChevronDown } from 'lucide-react'
import { Lesson } from './Lesson'

import * as Collapsible from '@radix-ui/react-collapsible'
import { play } from '../store/slices/player'
import { useCourse } from '../hooks/useCourse'

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
  const {
    lessons,
    currentLessonIdx,
    currentModuleIdx,
    isOpen,
    setIsOpen,
    dispatch,
  } = useCourse(moduleIndex)

  return (
    <Collapsible.Root
      className="group"
      defaultOpen={moduleIndex === 0}
      open={isOpen}
      onOpenChange={setIsOpen}
    >
      <Collapsible.Trigger className="flex w-full items-center gap-3 bg-zinc-700 p-4">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-900 text-xs">
          {moduleIndex + 1}
        </div>
        <div className="flex flex-col gap-1 text-left">
          <strong className="text-sm">{title}</strong>
          <span className="text-xs text-zinc-400">{lessonsAmount} lessons</span>
        </div>
        <ChevronDown className="ml-auto h-5 w-5 text-zinc-400 transition-transform group-data-[state=open]:rotate-180" />
      </Collapsible.Trigger>
      <Collapsible.Content className="CollapsibleContent">
        <nav className="relative flex flex-col gap-4 p-6">
          {lessons.map((lesson, lessonIndex) => {
            const isCurrent =
              currentModuleIdx === moduleIndex &&
              currentLessonIdx === lessonIndex
            return (
              <Lesson
                key={crypto.randomUUID()}
                title={lesson.title}
                duration={lesson.duration}
                onPlay={() => dispatch(play([moduleIndex, lessonIndex]))}
                isCurrent={isCurrent}
              />
            )
          })}
        </nav>
      </Collapsible.Content>
    </Collapsible.Root>
  )
}
