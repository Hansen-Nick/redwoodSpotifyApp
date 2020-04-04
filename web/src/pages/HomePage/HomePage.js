import AudioPlayer from 'src/components/audioplayer'
import Auth from 'src/components/auth'

const HomePage = () => {
  return (
    <div>
      <h1>HomePage</h1>
      <Auth />
      <AudioPlayer />
    </div>
  )
}

export default HomePage
