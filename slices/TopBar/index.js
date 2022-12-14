import React from 'react'
import { PrismicRichText } from '@prismicio/react'

const TopBar = ({ slice }) => (
  <section className="min-h-[10px] bg-black">
    <div className="topbar">
      <img src={slice.primary.image.url} alt={slice.primary.image.alt} />
    </div>
  </section>
)

export default TopBar
