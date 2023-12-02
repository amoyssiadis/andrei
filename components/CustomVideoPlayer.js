import { useEffect, useRef, useState } from 'react'

export const CustomVideoPlayer = ({ url }) => {
  const [playing, setPlaying] = useState(false)
  const videoRef = useRef()

  // useEffect(() => {
  //   setTimeout(() => {
  //     videoRef.current.play()
  //   }, 2000)
  // }, [])
  const backgroundVideo =
    url ||
    'https://andrei-portfolio.cdn.prismic.io/andrei-portfolio/ce1c0eb0-544a-4999-b90b-036ed15337fe_BJORK++DIGITAL-+MAKING+OF+FILTROS+DE+INSTAGRAM.webm'
  // Determine the video type based on the file extension
  const videoType =
    backgroundVideo.split('.').pop() === 'mp4' ? 'video/mp4' : 'video/webm'

  return (
    <video
      ref={videoRef}
      controls
      width="100%"
      loop
      style={{
        position: 'absolute',
        width: '100%',
        height: '100%',
        left: 0,
        top: 0,
      }}
    >
      <source src={backgroundVideo} type={videoType} />
    </video>
  )
}
export default CustomVideoPlayer
