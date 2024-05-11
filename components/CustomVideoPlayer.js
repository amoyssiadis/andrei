import React from 'react'
import VideoJS from './VideoJS'

const CustomVideoPlayer = ({ url }) => {
  const backgroundVideo =
    url ||
    'https://andrei-portfolio.cdn.prismic.io/andrei-portfolio/ce1c0eb0-544a-4999-b90b-036ed15337fe_BJORK++DIGITAL-+MAKING+OF+FILTROS+DE+INSTAGRAM.webm'

  const videoType =
    backgroundVideo.split('.').pop() === 'mp4' ? 'video/mp4' : 'video/webm'
  const playerRef = React.useRef(null)

  const videoJsOptions = {
    autoplay: false,
    controls: true,
    responsive: true,
    fluid: true,
    aspectRatio: '16:9',
    sources: [
      {
        src: backgroundVideo,
        type: videoType,
      },
    ],
  }

  const handlePlayerReady = (player) => {
    playerRef.current = player;
  }

  return <VideoJS options={videoJsOptions} onReady={handlePlayerReady} />
}

export default CustomVideoPlayer
