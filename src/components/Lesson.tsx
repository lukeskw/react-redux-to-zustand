import { PlayCircle, Video } from 'lucide-react'

interface ILessonProps {
  title: string
  duration: string
  isCurrent?: boolean
  onPlay: () => void
}

export function Lesson({
  title,
  duration,
  onPlay,
  isCurrent = false,
}: ILessonProps) {
  return (
    <button
      onClick={onPlay}
      data-playing={isCurrent}
      className="flex items-center gap-3 text-sm text-zinc-400 *:hover:text-zinc-200 data-[playing=true]:text-emerald-600 *:data-[playing=true]:hover:text-emerald-500"
    >
      {isCurrent ? (
        <PlayCircle className=" h-4 w-4 text-emerald-600" />
      ) : (
        <Video className=" h-4 w-4 text-zinc-500" />
      )}
      <span className="">{title}</span>
      <span className="ml-auto font-mono text-xs text-zinc-500">
        {duration}
      </span>
    </button>
  )
}
