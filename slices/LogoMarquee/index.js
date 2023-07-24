import React, { useState } from 'react'
import Marquee from 'react-fast-marquee'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid'
import { AnimatePresence, motion } from 'framer-motion'
const LogoMarquee = ({ slice }) => {
  const [direction, setDirection] = useState('left')
  const [speed, setSpeed] = useState(slice.primary.speed || 40)
  // console.log({ slice }, speed)
  function adjustImageWidth(image) {
    const widthBase = 51
    const scaleFactor = 0.525
    const imageRatio = image.target.naturalWidth / image.target.naturalHeight
    image.target.width = Math.pow(imageRatio, scaleFactor) * widthBase
  }

  return (
    <section className="mb-4 mt-12  p-1 sm:mt-12  ">
      <AnimatePresence mode="wait" initial={true}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            delay: 1.8,
            duration: 1.5,
          }}
          className=""
        >
          <p className="my-4  text-center text-xs font-bold tracking-wider sm:text-lg ">
            {slice.primary.title}
          </p>
          <div className="mx-auto flex max-w-5xl justify-center px-12 ">
            <ChevronLeftIcon
              className="h-16 cursor-pointer"
              onClick={() => setDirection('left')}
            />
            <Marquee
              className="w-fit   items-center justify-center "
              pauseOnHover={true}
              speed={speed}
              direction={direction}
              gradient={false}
              autoFill={true}
            >
              {slice?.items?.map((item, i) => (
                <div key={i} className=" mr-6 ">
                  <img
                    src={item.image.url}
                    alt={item.image.alt}
                    className="marquee-image max-h-14  object-cover	object-center"
                    onLoad={adjustImageWidth}
                  />
                </div>
              ))}
            </Marquee>
            <ChevronRightIcon
              className="h-16 cursor-pointer"
              onClick={() => setDirection('right')}
            />
          </div>
        </motion.div>
      </AnimatePresence>
    </section>
  )
}

export default LogoMarquee
