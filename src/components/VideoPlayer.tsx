import Player from 'react-player'
import { useDispatch } from 'react-redux'
import { next } from '../store/slices/player'
import { NextVideoToast } from './NextVideoToast'
import { useState } from 'react'
import { useCurrentCourse } from '../hooks/useCurrentCourse'

export function VideoPlayer() {
  const dispatch = useDispatch()
  const [showToast, setShowToast] = useState(false)

  const { currentLesson: video } = useCurrentCourse()

  function handlePlayNextVideo() {
    setShowToast(true)
    setTimeout(() => {
      dispatch(next())
      setShowToast(false)
    }, 5000)
  }

  if (!video) {
    return null
  }
  return (
    <div className="aspect-video w-full bg-zinc-900">
      <Player
        width="100%"
        height="100%"
        controls
        playing
        url={`https://www.youtube.com/watch?v=${video.id}`}
        onEnded={handlePlayNextVideo}
      />
      <NextVideoToast isOpen={showToast} />
    </div>
  )
}
