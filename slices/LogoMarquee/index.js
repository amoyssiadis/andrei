import Link from 'next/link'
import React, { useState } from 'react'
import Marquee from 'react-fast-marquee'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid'

const LogoMarquee = ({ slice }) => {
  const [direction, setDirection] = useState('left')
  const [speed, setSpeed] = useState(slice.primary.speed || 40)
  // console.log(slice?.items)
  return (
    <section className="mt-4 mb-4 p-1 ">
      <p className="my-4 text-center text-lg font-bold sm:text-xl ">
        {slice.primary.title}
      </p>
      <div className="mx-auto flex max-w-5xl justify-center ">
        <ChevronLeftIcon
          className="h-16 cursor-pointer"
          onClick={() => setDirection('right')}
        />
        <Marquee
          className="w-fit   items-center justify-center "
          pauseOnHover={true}
          speed={speed}
          direction={direction}
          gradient={false}
        >
          {slice?.items?.map((item, i) => (
            <div key={i} className=" mr-6 ">
              <Link href={item.link.url || '/#'}>
                <a>
                  <img
                    src={item.image.url}
                    alt={item.image.alt}
                    width="100%"
                    height="100%"
                    className=" max-h-14 object-cover	object-center"
                  />
                </a>
              </Link>
            </div>
          ))}
        </Marquee>
        <ChevronRightIcon
          className="h-16 cursor-pointer"
          onClick={() => setDirection('left')}
        />
      </div>
    </section>
  )
}

export default LogoMarquee
