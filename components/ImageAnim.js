import React from 'react'

function ImageAnim(images) {
  // console.log(images.images[0].image.url)
  // console.log({ images })
  const closeImage = (evt) => {
    //console.log(evt)
    evt.target.className = 'hidden'
  }
  return (
    <div className="">
      {images.images[0] && (
        <div className="x pointer-events-auto absolute w-28 cursor-pointer sm:w-52	 ">
          <img
            className="y"
            src={images.images[0].image.url}
            key="1"
            alt="Close / Fechar"
            onClick={closeImage}
          />
        </div>
      )}
      {images.images[1] && (
        <div className="  x2 pointer-events-auto absolute right-0 top-0  w-28 cursor-pointer sm:w-52	">
          <img
            className="y2"
            src={images.images[1].image.url}
            key="2"
            alt="Close / Fechar"
            onClick={closeImage}
          />
        </div>
      )}
    </div>
  )
}

export default ImageAnim
