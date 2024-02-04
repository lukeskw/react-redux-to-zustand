import Player from 'react-player'
import { useAppSelector } from '../store'
import { useDispatch } from 'react-redux'
import { next } from '../store/slices/player'
import { NextVideoToast } from './NextVideoToast'
import { useState } from 'react'

export function VideoPlayer() {
  const dispatch = useDispatch()
  const [showToast, setShowToast] = useState(false)

  const video = useAppSelector((state) => {
    const { currentModuleIdx, currentLessonIdx } = state.player

    const currentLesson =
      state.player.course.modules[currentModuleIdx].lessons[currentLessonIdx]

    return currentLesson
  })

  function handlePlayNextVideo() {
    setShowToast(true)
    setTimeout(() => {
      dispatch(next())
      setShowToast(false)
    }, 5000)
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
