import React from 'react'

import ImageAnim from '../../components/ImageAnim'
const FloatingImages = ({ slice }) => {
  console.log({ slice })
  const randomizeIndex = (count) => {
    return Math.floor(count * Math.random())
  }

  const randomizeElemnts = (array, count) => {
    if (count > array.length) {
      throw new Error(
        'Array size cannot be smaller than expected random numbers count.'
      )
    }
    const result = []
    const guardian = new Set()
    while (result.length < count) {
      const index = randomizeIndex(count)
      const element = array[index]
      if (guardian.has(element)) {
        continue
      }
      guardian.add(element)
      result.push(element)
    }
    return result
  }
  const images = randomizeElemnts(slice?.items, slice?.items.length - 1)
  return (
    <div className="absolute inset-0 ">
      <ImageAnim images={images} />
      {/* {slice?.items?.map((item, i) => (
        <AnimatedImage src={item.image.url} key={i} />
      ))} */}
    </div>
  )
}

export default FloatingImages
