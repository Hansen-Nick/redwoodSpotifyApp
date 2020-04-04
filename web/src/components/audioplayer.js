import React from 'react'
import audioTest from 'src/bensound-summer.mp3'

const AudioPlayer = () => {
  return (
    <div>
      <audio className="audio-player" controls src={audioTest}></audio>
    </div>
  )
}

export default AudioPlayer
