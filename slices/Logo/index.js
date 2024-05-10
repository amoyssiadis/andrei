import React from 'react'
import * as prismicH from '@prismicio/helpers'
import { Bounded } from '../../components/Bounded'
import { PrismicNextImage } from '@prismicio/next'
import Link from 'next/link'
const Logo = ({ slice }) => (
  <Bounded as="section" className="bg-white ">
    <div className="flex flex-col items-center justify-center">
      <div className="w-full max-w-2xl md:w-[600px]">
        <Link href="/">
          <a>
            {prismicH.isFilled.image(slice.primary.image) && (
              <PrismicNextImage
                field={slice.primary.image}
                layout="responsive"
                className=""
              />
            )}
          </a>
        </Link>
      </div>
    </div>
  </Bounded>
)

export default Logo
