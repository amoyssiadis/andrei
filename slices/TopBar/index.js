/* eslint-disable @next/next/no-img-element */
import React from 'react'

const TopBar = ({ slice }) => (
  <section className="topbar z-50">
    <img
      src={slice.primary.image.url}
      alt={slice.primary.image.alt}
      className="w-full"
    />
  </section>
)

export default TopBar
