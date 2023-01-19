import React, { useState } from 'react'
import * as prismicH from '@prismicio/helpers'
import { Bounded } from '../../components/Bounded'
import { PrismicNextImage } from '@prismicio/next'
import Link from 'next/link'
import { useRouter } from 'next/router'
import MenuModal from '../../components/MenuModal'
import MenuModalImage from '../../public/portfoliomenu.svg'
import Alert from '../../components/Alert'
//import clsx from 'clsx'
import useWindowDimensions from '../../lib/useWindowDimensions'
import SidePortfolioMenu from '../../components/SidePortfolioMenu'
import GoToTop from '../../components/GoToTop'

const MainMenu = ({ slice }) => {
  const router = useRouter()
  const style = router.asPath === '/' ? 'h-screen -mt-24' : ''
  const [modalOpen, setModalOpen] = useState(false)
  const [alertOpen, setAlertOpen] = useState(false)
  const email = 'andrei@andrei.com.br' //prismicH.asText(slice.primary.email);
  //console.log(slice.variation)
  const { width, height } = useWindowDimensions()

  // GALERY DESKTOP MAIN MENU
  if (slice.variation === 'gallery' && width > 1000) {
    console.log('router.asPath', router.asPath)
    return (
      <Bounded as="section" className=" overflow-hidden  bg-black py-10 ">
        <div className={`${style} flex flex-row items-center justify-center  `}>
          <div className=" flex flex-col  py-4  sm:order-last  ">
            <div className="">
              <ul className="langsprite-gallery filter-white">
                <Link href="#en">
                  <a>
                    <li className="en"></li>
                  </a>
                </Link>
                <li className="spacer"></li>
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
          <div className="navbar-gallery scale-[0.56] sm:scale-[0.9] ">
            <ul className="navsprite-gallery filter-white">
              <a onClick={() => setModalOpen(true)}>
                <li
                  className={
                    router.asPath == '/gallery' ? 'active work' : '' + 'work'
                  }
                ></li>
              </a>

              <Link href="/info">
                <a>
                  <li
                    className={
                      router.asPath == '/info' ? 'active info' : '' + 'info'
                    }
                  ></li>
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

              <a
                href="https://instagram.com/amoyssiadis"
                target="_blank"
                rel="noopener noreferrer"
              >
                <li className="instagram"></li>
              </a>
            </ul>
            <Alert
              email={email}
              isOpen={alertOpen}
              setIsOpen={setAlertOpen}
              variation={slice.variation}
            />
          </div>
          <SidePortfolioMenu />
          <GoToTop />
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
        <div className="mb-9 flex  flex-col  sm:mb-12  ">
          <div className="langsel ml-36 scale-[0.56]  sm:ml-0 sm:transform-none">
            <ul className={`langsprite  ${filter} `}>
              <Link href="#en">
                <a>
                  <li className="en"></li>
                </a>
              </Link>
              <li className="spacer"></li>
              <Link href="#pt">
                <a>
                  <li className="pt"></li>
                </a>
              </Link>
            </ul>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center   ">
          <div className="relative -my-4  w-[300px] bg-[url('/logobg.webp')] py-4 px-4   sm:w-[630px] ">
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
              <li
                className={
                  router.asPath == '/gallery' ? 'active work' : '' + 'work'
                }
              ></li>
            </a>

            <Link href="/info">
              <a>
                <li
                  className={
                    router.asPath == '/info' ? 'active info' : '' + 'info'
                  }
                ></li>
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

            <a
              href="https://instagram.com/amoyssiadis"
              target="_blank"
              rel="noopener noreferrer"
            >
              <li className="instagram"></li>
            </a>
          </ul>
        </div>
        <Alert
          email={email}
          isOpen={alertOpen}
          setIsOpen={setAlertOpen}
          variation={slice.variation}
        />
        {slice.variation === 'gallery' && <SidePortfolioMenu />}
        <GoToTop />
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
