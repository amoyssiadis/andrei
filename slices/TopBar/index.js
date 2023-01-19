import React from 'react'

const TopBar = ({ slice }) => (
  <section className="topbar ">
    <img
      src={slice.primary.image.url}
      alt={slice.primary.image.alt}
      className="w-full"
    />
  </section>
)

export default TopBar
