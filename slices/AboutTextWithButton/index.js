import React from 'react'
import { PrismicRichText } from '@prismicio/react'
import { PrismicLink } from '@prismicio/react'
import FloatingImage from '../FloatingImage'

// import * as prismicH from "@prismicio/helpers";

const AboutTextWithButton = ({ slice }) => (
  <section>
    <div className="min-w-screen mx-auto mt-4 max-w-[1200px] flex-row px-4 sm:mt-16 sm:flex ">
      <div className=" sm:pl-8 sm:pr-8 ">
        <div className="max-w-[940px] text-lg font-bold tracking-wider sm:pr-20 ">
          <PrismicRichText field={slice.primary.about} />
        </div>
      </div>
      <div className=" right-10 mx-auto mt-10 w-fit  lg:mt-0 lg:mr-10 ">
        <FloatingImage slice={slice} />
      </div>
    </div>
  </section>
)

export default AboutTextWithButton
