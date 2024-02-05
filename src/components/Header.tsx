import { useCurrentCourse } from '../hooks/useCurrentCourse'

export function Header() {
  const {
    currentModule,
    currentLesson,
    isPending: isCourseLoading,
  } = useCurrentCourse()

  return (
    <div className="flex flex-col gap-2">
      {isCourseLoading ? (
        <>
          <div className="h-5 w-64 animate-pulse rounded bg-zinc-600"></div>
          <span className="flex items-center justify-center gap-2">
            Module:{' '}
            <div className="h-4 w-64 animate-pulse rounded bg-zinc-600"></div>
          </span>
        </>
      ) : (
        <>
          <h1 className="text-2xl font-bold">{currentLesson?.title}</h1>
          <span className="text-sm text-zinc-400">
            Module: {currentModule?.title}
          </span>
        </>
      )}
    </div>
  )
}
