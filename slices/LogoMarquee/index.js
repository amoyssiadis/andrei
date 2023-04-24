import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Marquee from 'react-fast-marquee'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid'

const LogoMarquee = ({ slice }) => {
  const [direction, setDirection] = useState('left')
  const [speed, setSpeed] = useState(slice.primary.speed || 40)

  function adjustImageWidth(image) {
    var widthBase = 50
    var scaleFactor = 0.525
    var imageRatio = image.width / image.height

    image.style.width = Math.pow(imageRatio, scaleFactor) * widthBase + 'px'
  }

  useEffect(() => {
    const images = document.querySelectorAll('.marquee-image')

    function handleImageLoad() {
      adjustImageWidth(this)
    }

    images.forEach((image) => {
      if (image.complete) {
        adjustImageWidth(image)
      } else {
        image.addEventListener('load', handleImageLoad)
      }
    })

    return () => {
      images.forEach((image) => {
        image.removeEventListener('load', handleImageLoad)
      })
    }
  }, [])

  return (
    <section className="mb-4 mt-12  p-1 sm:mt-24 ">
      <p className="my-4 text-center text-lg font-bold tracking-wider sm:text-lg ">
        {slice.primary.title}
      </p>
      <div className="mx-auto flex max-w-5xl justify-center ">
        <ChevronLeftIcon
          className="h-16 cursor-pointer"
          onClick={() => setDirection('right')}
        />
        <Marquee
          className="w-fit   items-center justify-center "
          pauseOnHover={true}
          speed={speed}
          direction={direction}
          gradient={false}
        >
          {slice?.items?.map((item, i) => (
            <div key={i} className=" mr-6 ">
              <img
                src={item.image.url}
                alt={item.image.alt}
                className="marquee-image max-h-14  object-cover	object-center"
              />
            </div>
          ))}
        </Marquee>
        <ChevronRightIcon
          className="h-16 cursor-pointer"
          onClick={() => setDirection('left')}
        />
      </div>
    </section>
  )
}

export default LogoMarquee
