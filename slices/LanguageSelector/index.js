import React from 'react'
import { PrismicRichText } from '@prismicio/react'
import { Bounded } from '../../components/Bounded'
import { PrismicNextImage } from '@prismicio/next'
import * as prismicH from '@prismicio/helpers'
import Link from 'next/link'

const LanguageSelector = ({ slice }) => (
  <Bounded as="section">
    <div className="justify-right flex flex-col items-end">
      <div className="flex items-center justify-center  gap-8 text-2xl">
        <Link href="#en">
          <a>
            <div>en</div>
          </a>
        </Link>
        <div>/</div>
        <Link href="#pt">
          <a>
            <div>pt</div>
          </a>
        </Link>
      </div>
    </div>
  </Bounded>
)

export default LanguageSelector
