import React from 'react'
import { PrismicNextImage } from '@prismicio/next'
import * as prismicH from '@prismicio/helpers'
import { motion } from 'framer-motion'

const FloatingImage = ({ slice }) => {
  const FloatImgDivRef = React.useRef(null)
  const closeImage = (evt) => {
    // console.log(evt)
    FloatImgDivRef.current.className =
      'opacity-0 pointer-events-auto relative mt-8 w-[200px] cursor-pointer'
  }
  return (
    <div
      className="pointer-events-auto relative mt-8 w-[200px] cursor-pointer"
      onClick={closeImage}
      ref={FloatImgDivRef}
    >
      {prismicH.isFilled.image(slice.primary.image) && (
        <motion.div
          className="pointer-events-none"
          initial={{ y: 0, x: 0 }}
          animate={{
            y: [50, -80, 0],
            x: [50, -50, 0],
          }}
          transition={{
            duration: 5,
            ease: 'easeInOut',
            repeat: Infinity,
            repeatType: 'reverse',
          }}
        >
          <PrismicNextImage field={slice.primary.image} layout="responsive" />
        </motion.div>
      )}
    </div>
  )
}

export default FloatingImage
