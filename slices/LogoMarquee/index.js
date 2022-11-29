import Link from 'next/link';
import React, { useState } from 'react'
import Marquee from "react-fast-marquee";
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid'

const LogoMarquee = ({ slice }) => {
  const [direction, setDirection] = useState("left");
  const [speed, setSpeed] = useState(slice.primary.speed || 40);
  // console.log(slice?.items)
  return (
  <section className='mt-4 mb-4 p-1 '>
    <p className='text-center font-bold text-lg sm:text-xl my-4 '>{slice.primary.title}</p>
    <div className='flex max-w-5xl mx-auto justify-center '>
      <ChevronLeftIcon className='cursor-pointer h-16' onClick={() => setDirection("right")} />
      <Marquee className='w-fit   items-center justify-center ' pauseOnHover={true} speed={speed} direction={direction} gradient={false}>
        { slice?.items?.map((item, i) => 
        <div key={i} className=' mr-6 '><Link href={item.link.url || "/#"}><a>
          <img src={item.image.url} alt={item.image.alt} width="100%" height="100%" className=" object-cover object-center	max-h-14" />
          </a></Link></div>) }
      </Marquee>
      <ChevronRightIcon className='cursor-pointer h-16' onClick={() => setDirection("left")} />
    </div>
    
  </section>
)}

export default LogoMarquee