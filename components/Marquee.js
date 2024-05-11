/* eslint-disable @next/next/no-img-element */
import React from 'react'

const Marquee = ({ slice, reverseAnimation }) => {
  function adjustImageWidth(image) {
    const widthBase = 30
    const scaleFactor = 0.525
    const imageRatio = image.target.naturalWidth / image.target.naturalHeight
    image.target.width = Math.pow(imageRatio, scaleFactor) * widthBase
  }

  return (
    <div className="main__container items-center justify-center">
       <div className={`marquee ${reverseAnimation ? 'reverse' : 'normal'}`}>
          <ul className="marquee__content">
            {slice?.items?.map((item, i) => (
              <div key={i} className="marquee__item">
                <img
                  src={item.image.url}
                  alt={item.image.alt}
                  className="h-6 md:h-8 lg:w-max object-contain object-center"
                  onLoad={adjustImageWidth}
                />
              </div>
            ))}
          </ul>

          <ul aria-hidden="true" className="marquee__content">
            {slice?.items?.map((item, i) => (
              <div key={i} className="marquee__item">
                <img
                  src={item.image.url}
                  alt={item.image.alt}
                  className="h-6 md:h-8 lg:w-max object-contain object-center"
                  onLoad={adjustImageWidth}
                />
              </div>
            ))}
          </ul>
        </div>
    </div>
  )
}

export default Marquee
