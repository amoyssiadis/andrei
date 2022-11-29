import React from 'react'
import { PrismicRichText } from '@prismicio/react'
import { PrismicLink } from '@prismicio/react'
import FloatingImage from '../FloatingImage'

// import * as prismicH from "@prismicio/helpers";

const AboutTextWithButton = ({ slice }) => (
  <section>
    <div className="min-w-screen mx-auto max-w-[1200px] flex-row px-4 sm:mt-14 md:flex ">
      <div className="relative md:pl-8 md:pr-8 ">
        <div className="max-w-[940px] md:pr-20 ">
          <PrismicRichText field={slice.primary.about} />
        </div>
        <div className="mt-2  w-full max-w-[850px] text-center sm:text-right ">
          <PrismicLink field={slice.primary.button_link}>
            <button className="rounded-md bg-gray-800 px-4 py-2 text-white">
              {slice.primary.button_name}
            </button>
          </PrismicLink>
        </div>
      </div>

      <div className="static right-10 mx-auto mt-10 w-fit sm:absolute md:mt-0 md:mr-10 ">
        <FloatingImage slice={slice} />
      </div>
    </div>
  </section>
)

export default AboutTextWithButton
