import React from 'react'
import { PrismicRichText } from '@prismicio/react'

const TopBar = ({ slice }) => (
  <section className="mx-auto w-full bg-red-200">
    <div className="topbar">
      <img
        src={slice.primary.image.url}
        alt={slice.primary.image.alt}
        className="w-full"
      />
    </div>
  </section>
)

export default TopBar
