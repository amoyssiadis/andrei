/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from 'react'
import LazyLoad from 'react-lazy-load'
import { Gallery } from 'react-grid-gallery'

const StyledMansory = ({ slice, openMedia, hoverImage }) => {
  const images = slice?.items?.map((item) => {
    const width = item?.image?.dimensions?.width || 850
    const height = item?.image?.dimensions?.height || 400

    return {
      src: item?.image?.url,
      width: width,
      height: height,
      alt: item?.image?.alt,
      item,
    }
  })

  return (
    <div className="mx-auto min-h-screen max-w-6xl px-4 md:px-20">
      <Gallery
        images={images}
        enableImageSelection={false}
        thumbnailImageComponent={(props) => (
          <CustomImage
            props={props}
            hoverImage={hoverImage}
            openMedia={openMedia}
          />
        )}
      />
    </div>
  )
}

export default StyledMansory

const CustomImage = ({ props, hoverImage, openMedia }) => {
  const item = props?.item?.item
  const is_clickable = item?.is_clickable || false
  const url = item?.image?.url || null
  const hover_url = item.image_hover.url || null
  return (
    <div
      style={{
        cursor: is_clickable ? 'pointer' : 'default',
      }}
    >
      <a onClick={is_clickable ? () => openMedia(item) : undefined}>
        <LazyLoad>
        <img
          {...props.imageProps}
          onMouseOver={(e) => hoverImage(e, hover_url)}
          onMouseOut={(e) => hoverImage(e, url)}
        />
        </LazyLoad>
      </a>
    </div>
  )
}
