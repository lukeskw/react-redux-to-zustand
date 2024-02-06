import Player from 'react-player'
// import { next } from '../store/slices/player'
import { NextVideoToast } from './NextVideoToast'
import { useState } from 'react'
// import { useCurrentCourse } from '../hooks/useCurrentCourse'
import { Loader2 } from 'lucide-react'
import { useCurrentCourseZustand } from '../hooks/useCurrentCourseZustand'

export function VideoPlayer() {
  const [showToast, setShowToast] = useState(false)

  // const { currentLesson: video, appDispatch, isPending } = useCurrentCourse()
  const {
    currentLesson: video,
    isPending: isCourseLoading,
    next,
  } = useCurrentCourseZustand()

  function handlePlayNextVideo() {
    setShowToast(true)
    setTimeout(() => {
      // appDispatch(next())
      next()
      setShowToast(false)
    }, 5000)
  }
  return (
    <div className="aspect-video w-full bg-zinc-900">
      {isCourseLoading ? (
        <div className="flex h-full items-center justify-center">
          <Loader2 className="h-6 w-6 animate-spin text-zinc-400" />
        </div>
      ) : (
        <>
          <Player
            width="100%"
            height="100%"
            controls
            playing
            url={`https://www.youtube.com/watch?v=${video?.id}`}
            onEnded={handlePlayNextVideo}
          />
          <NextVideoToast isOpen={showToast} />
        </>
      )}
    </div>
  )
}
