import React from 'react'
import ReactPlayer from 'react-player'

const CustomVideoPlayer = ({ url }) => {
  const defaultWebMUrl =
    'https://andrei-portfolio.cdn.prismic.io/andrei-portfolio/ce1c0eb0-544a-4999-b90b-036ed15337fe_BJORK++DIGITAL-+MAKING+OF+FILTROS+DE+INSTAGRAM.webm'
  const videoUrl = url || defaultWebMUrl

  return (
    <div className="video-player-wrapper">
      <ReactPlayer url={videoUrl} controls={true} width="100%" height="100%" />
    </div>
  )
}

export default CustomVideoPlayer

// import React, { useEffect, useRef, useState } from 'react'
// import VideoJS from './VideoJS'

// const CustomVideoPlayer = ({ url }) => {
//   const [videoSources, setVideoSources] = useState([])
//   const playerRef = useRef(null)

//   useEffect(() => {
//     const defaultWebMUrl =
//       'https://andrei-portfolio.cdn.prismic.io/andrei-portfolio/ce1c0eb0-544a-4999-b90b-036ed15337fe_BJORK++DIGITAL-+MAKING+OF+FILTROS+DE+INSTAGRAM.webm'
//     const defaultMp4Url = defaultWebMUrl.replace('.webm', '.mp4')

//     const userUrlWebM = url || defaultWebMUrl
//     const userUrlMp4 = url ? url.replace('.webm', '.mp4') : defaultMp4Url

//     const canPlayWebM =
//       document.createElement('video').canPlayType('video/webm') !== ''
//     const canPlayMp4 =
//       document.createElement('video').canPlayType('video/mp4') !== ''

//     const sources = []
//     // if (canPlayMp4) {
//     //   sources.push({ src: userUrlMp4, type: 'video/mp4' })
//     // }
//     if (canPlayWebM) {
//       sources.push({ src: userUrlWebM, type: 'video/webm' })
//     }

//     setVideoSources(sources)
//   }, [url])

//   console.log({ videoSources })

//   const videoJsOptions = {
//     autoplay: false,
//     controls: true,
//     responsive: true,
//     fluid: true,
//     aspectRatio: '16:9',
//     preload: 'auto',
//     html5: {
//       hls: {
//         withCredentials: false,
//       },
//     },
//     sources: videoSources,
//   }

//   const handlePlayerReady = (player) => {
//     playerRef.current = player
//     player.on('waiting', () => {
//       console.log('Player is waiting')
//     })
//     player.on('playing', () => {
//       console.log('Player is playing')
//     })
//   }

//   return (
//     <>
//       {videoSources.length > 0 ? (
//         <VideoJS options={videoJsOptions} onReady={handlePlayerReady} />
//       ) : (
//         <p>Loading video...</p>
//       )}
//     </>
//   )
// }

// export default CustomVideoPlayer

// import React from 'react'
// import VideoJS from './VideoJS'

// const CustomVideoPlayer = ({ url }) => {
//   const defaultUrl =
//     'https://andrei-portfolio.cdn.prismic.io/andrei-portfolio/ce1c0eb0-544a-4999-b90b-036ed15337fe_BJORK++DIGITAL-+MAKING+OF+FILTROS+DE+INSTAGRAM.webm'

//   const videoSources = [
//     {
//       src: url || defaultUrl.replace('.webm', '.mp4'),
//       type: 'video/mp4',
//     },
//     {
//       src: url || defaultUrl,
//       type: 'video/webm',
//     },
//   ]

//   const playerRef = React.useRef(null)

//   const videoJsOptions = {
//     autoplay: false,
//     controls: true,
//     responsive: true,
//     fluid: true,
//     aspectRatio: '16:9',
//     preload: 'auto',
//     html5: {
//       hls: {
//         withCredentials: false,
//       },
//     },
//     sources: videoSources,
//   }

//   const handlePlayerReady = (player) => {
//     playerRef.current = player
//     player.on('waiting', () => {
//       console.log('Player is waiting')
//     })
//     player.on('playing', () => {
//       console.log('Player is playing')
//     })
//   }

//   return <VideoJS options={videoJsOptions} onReady={handlePlayerReady} />
// }

// export default CustomVideoPlayer
