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
import GoToTop from '../../components/GoToTop'
import { AnimatePresence, motion } from 'framer-motion'
import { PrismicLink } from '@prismicio/react'

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
    //console.log('router.asPath', router.asPath)
    return (
      <Bounded as="section" className="   bg-black py-10 ">
        <div
          className={`${style} flex flex-row items-center justify-center px-8 `}
        >
          <div className=" flex flex-col  py-4  sm:order-last  ">
            <div className="">
              <ul className="langsprite-gallery filter-white">
                <PrismicLink href={router.asPath} locale="en-us">
                  <li className="en"></li>
                </PrismicLink>
                <li className="spacer"></li>
                <PrismicLink href={router.asPath} locale="pt-br">
                  <li className="pt"></li>
                </PrismicLink>
              </ul>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center   ">
            <div className="  w-[300px] sm:w-[300px] ">
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
          {/* <SidePortfolioMenu /> */}
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
  const isInfo = router.asPath == '/info' ? ' scale-[0.85] ' : ''
  return (
    <AnimatePresence mode="wait" initial={true}>
      <motion.div>
        <Bounded as="section" className={`     ${bg} `}>
          <div
            className={`${style} flex flex-col items-center justify-center  ${isInfo}`}
          >
            <motion.div
              layoutId="langsel"
              transition={{
                duration: 1.5,
              }}
              className="mb-9 flex  flex-col  sm:mb-12  "
            >
              <div className="langsel ml-36 scale-[0.56]  sm:ml-0 sm:transform-none">
                <ul className={`langsprite  ${filter} `}>
                  <PrismicLink href={router.asPath} locale="en-us">
                    <li className="en"></li>
                  </PrismicLink>
                  <li className="spacer"></li>
                  <PrismicLink href={router.asPath} locale="pt-br">
                    <li className="pt"></li>
                  </PrismicLink>
                </ul>
              </div>
            </motion.div>
            <motion.div
              layoutId="logo"
              transition={{
                duration: 1.5,
              }}
              className="flex flex-col items-center justify-center   "
            >
              <div className=" -my-4  w-[300px] rounded-2xl bg-[url('/logobg.webp')] py-4 px-4   sm:w-[630px] ">
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
            </motion.div>
            <motion.div
              layoutId="menulinks"
              transition={{
                duration: 1.5,
              }}
              className="navbar scale-[0.56] sm:transform-none "
            >
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
                      try {
                        navigator.clipboard.writeText(email)
                        setAlertOpen(true)
                      } catch (e) {
                        console.log(e)
                      }
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
            </motion.div>
            <Alert
              email={email}
              isOpen={alertOpen}
              setIsOpen={setAlertOpen}
              variation={slice.variation}
            />
            {/* {slice.variation === 'gallery' && <SidePortfolioMenu />} */}
            <GoToTop />
            <MenuModal
              isOpen={modalOpen}
              setIsOpen={setModalOpen}
              image={MenuModalImage}
            />
          </div>
        </Bounded>
      </motion.div>
    </AnimatePresence>
  )
}

export default MainMenu
