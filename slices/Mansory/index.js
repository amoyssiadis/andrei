import React, { useState } from 'react'
import { PrismicLink, PrismicRichText } from '@prismicio/react'
import Image from 'next/image'
import GalleryModal from '../../components/GalleryModal'
import Sidesideportfoliomenu from '../../components/SidePortfolioMenu'
import LazyLoad from 'react-lazy-load'

const Mansory = ({ slice }) => {
  const [modalOpen, setModalOpen] = useState(false)
  const [modalMedia, setModalMedia] = useState(null)
  // console.log({ Mansory: slice })
  const oneColumn = slice?.primary?.oneColumn || false

  function openMedia(item) {
    //console.log('openMedia', item)
    //setModalMedia(item.video.url)
    setModalMedia(item)
    setModalOpen(true)
  }
  function hoverImage(e, url) {
    //change the src of the image
    if (url && e.target.src !== url) {
      e.target.src = url
    }
  }

  return (
    <section className="  bg-black">
      <Sidesideportfoliomenu />
      <div className={`masonry px-24 ${oneColumn ? 'oneColumn' : ''}  `}>
        {slice?.items?.map((item, i) => {
          //console.log(item.video)
          // you might want to use a lib here (eg. react-oembed-container)
          const width = item.image.dimensions.width || 850
          const height = item.image.dimensions.height || 400

          return (
            <div className="cursor-pointer p-1" key={i}>
              <a onClick={() => openMedia(item)}>
                <LazyLoad>
                  <img
                    className=""
                    src={item.image.url}
                    alt={item.image.alt}
                    width={width}
                    height={height}
                    onMouseOver={(e) =>
                      hoverImage(e, item.image_hover.url || null)
                    }
                    onMouseOut={(e) => hoverImage(e, item.image.url)}
                  />
                </LazyLoad>
              </a>
            </div>
          )
        })}
      </div>
      {modalMedia && (
        <GalleryModal
          media={modalMedia}
          isOpen={modalOpen}
          setIsOpen={setModalOpen}
        />
      )}
    </section>
  )
}

export default Mansory
