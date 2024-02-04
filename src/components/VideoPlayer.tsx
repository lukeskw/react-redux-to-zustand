import Player from 'react-player'

export function VideoPlayer() {
  return (
    <div className="aspect-video w-full bg-zinc-900">
      <Player
        width="100%"
        height="100%"
        controls
        url="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
      />
    </div>
  )
}
