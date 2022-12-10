import React from 'react'
import { PrismicRichText } from '@prismicio/react'
import { PrismicLink } from '@prismicio/react'
import FloatingImage from '../FloatingImage'

// import * as prismicH from "@prismicio/helpers";

const AboutTextWithButton = ({ slice }) => (
  <section>
    <div className="min-w-screen mx-auto max-w-[1200px] flex-row px-4 sm:mt-14 md:flex ">
      <div className="relative md:pl-8 md:pr-8 ">
        <div className="max-w-[940px] text-lg font-bold tracking-wider md:pr-20 ">
          <PrismicRichText field={slice.primary.about} />
        </div>
      </div>

      <div className="static right-10 mx-auto mt-10 w-fit sm:absolute md:mt-0 md:mr-10 ">
        <FloatingImage slice={slice} />
      </div>
    </div>
  </section>
)

export default AboutTextWithButton
