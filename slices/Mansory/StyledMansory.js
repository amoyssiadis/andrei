/* eslint-disable @next/next/no-img-element */
import React from 'react'
import LazyLoad from 'react-lazy-load'

const StyledMansory = ({ slice, openMedia, hoverImage }) => {
  return (
    <div className="mx-auto flex min-h-screen max-w-6xl flex-row flex-wrap px-4 md:px-20">
      {slice?.items?.map((item, i) => {
        const isClickable = item?.is_clickable || false
        return (
          <div className={`${isClickable ? 'cursor-pointer' : 'cursor-default'} p-1`} key={i}>
            <a onClick={isClickable ? () => openMedia(item) : undefined}>
              <LazyLoad>
                <img
                  className="block h-[160px] object-cover md:h-[220px]"
                  src={item.image.url}
                  alt={item.image.alt}
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
  )
}

export default StyledMansory
