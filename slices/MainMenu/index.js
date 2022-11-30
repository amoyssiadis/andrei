import React, { useState } from 'react'
import { PrismicRichText } from '@prismicio/react'
import * as prismicH from '@prismicio/helpers'
import { Bounded } from '../../components/Bounded'
import { PrismicNextImage } from '@prismicio/next'
import Link from 'next/link'
import { useRouter } from 'next/router'
import MenuModal from '../../components/MenuModal'
import MenuModalImage from '../../public/portfoliomenu.svg'
import Alert from '../../components/Alert'
import clsx from 'clsx'
import useWindowDimensions from '../../lib/useWindowDimensions'

const MainMenu = ({ slice }) => {
  const router = useRouter()
  const style = router.asPath === '/' ? 'h-screen -mt-32' : ''
  const [modalOpen, setModalOpen] = useState(false)
  const [alertOpen, setAlertOpen] = useState(false)
  const email = 'andrei@andrei.com' //prismicH.asText(slice.primary.email);
  //console.log(slice.variation)
  const { width, height } = useWindowDimensions()
  //console.log('dimensions: ', width, height)
  if (slice.variation === 'gallery' && width > 1000) {
    return (
      <Bounded as="section" className=" overflow-hidden  bg-black ">
        <div className={`${style} flex flex-row items-center justify-center  `}>
          <div className=" flex flex-col  py-4  sm:order-last  ">
            <div className="">
              <ul className="langsprite-gallery filter-white">
                <Link href="#en">
                  <a>
                    <li className="en"></li>
                  </a>
                </Link>
                <Link href="#pt">
                  <a>
                    <li className="pt"></li>
                  </a>
                </Link>
              </ul>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center   ">
            <div className="relative  w-[300px] sm:w-[300px] ">
              <Link href="/">
                <a>
                  {prismicH.isFilled.image(slice.primary.logo) && (
                    <PrismicNextImage
                      field={slice.primary.logo}
                      className="filter-white "
                      layout="responsive"
                    />
                  )}
                </a>
              </Link>
            </div>
          </div>
          <div className="navbar-gallery scale-[0.56] sm:transform-none ">
            <ul className="navsprite-gallery filter-white">
              <a onClick={() => setModalOpen(true)}>
                <li className="work"></li>
              </a>

              <Link href="/info">
                <a>
                  <li className="info"></li>
                </a>
              </Link>

              <a>
                <li
                  className="contact"
                  onClick={() => {
                    navigator.clipboard.writeText(email)
                    setAlertOpen(true)
                  }}
                ></li>
              </a>

              <Link href="https://instagram.com/amoyssiadis">
                <a>
                  <li className="instagram"></li>
                </a>
              </Link>
            </ul>
            <Alert email={email} isOpen={alertOpen} setIsOpen={setAlertOpen} />
          </div>
          <MenuModal
            isOpen={modalOpen}
            setIsOpen={setModalOpen}
            image={MenuModalImage}
          />
        </div>
      </Bounded>
    )
  }
  const bg = slice.variation === 'gallery' ? 'bg-black' : ''
  const filter = slice.variation === 'gallery' ? 'filter-white' : ''
  return (
    <Bounded as="section" className={` overflow-hidden   ${bg} `}>
      <div className={`${style} flex flex-col items-center justify-center`}>
        <div className=" mb-12  flex  flex-col  ">
          <div className="langsel">
            <ul className={`langsprite ${filter} `}>
              <Link href="#en">
                <a>
                  <li className="en"></li>
                </a>
              </Link>
              <Link href="#pt">
                <a>
                  <li className="pt"></li>
                </a>
              </Link>
            </ul>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center   ">
          <div className="relative  w-[300px] sm:w-[600px] ">
            <Link href="/">
              <a>
                {prismicH.isFilled.image(slice.primary.logo) && (
                  <PrismicNextImage
                    field={slice.primary.logo}
                    className={` ${filter} `}
                    layout="responsive"
                  />
                )}
              </a>
            </Link>
          </div>
        </div>
        <div className="navbar scale-[0.56] sm:transform-none ">
          <ul className={`navsprite ${filter} `}>
            <a onClick={() => setModalOpen(true)}>
              <li className="work"></li>
            </a>

            <Link href="/info">
              <a>
                <li className="info"></li>
              </a>
            </Link>

            <a>
              <li
                className="contact"
                onClick={() => {
                  navigator.clipboard.writeText(email)
                  setAlertOpen(true)
                }}
              ></li>
            </a>

            <Link href="https://instagram.com/amoyssiadis">
              <a>
                <li className="instagram"></li>
              </a>
            </Link>
          </ul>
        </div>
        <Alert email={email} isOpen={alertOpen} setIsOpen={setAlertOpen} />
        <MenuModal
          isOpen={modalOpen}
          setIsOpen={setModalOpen}
          image={MenuModalImage}
        />
      </div>
    </Bounded>
  )
}

export default MainMenu
