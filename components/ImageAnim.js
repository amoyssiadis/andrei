import React from 'react'

function ImageAnim(images) {
  // console.log(images.images[0].image.url)
  // console.log({ images })
  const closeImage = (evt) => {
    console.log(evt)
    evt.target.className = 'hidden'
  }
  return (
    <div className="">
      <div className="imagesAnim x absolute">
        <img
          className="y"
          src={images.images[0].image.url}
          alt="Close / Fechar"
          onClick={closeImage}
        />
      </div>
      <div className="imagesAnim  x2 absolute right-0 top-0">
        <img
          className="y2"
          src={images.images[1].image.url}
          alt="Close / Fechar"
          onClick={closeImage}
        />
      </div>
    </div>
  )
}

export default ImageAnim
