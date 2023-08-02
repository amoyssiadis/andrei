import { Fragment, useEffect, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XCircleIcon } from '@heroicons/react/24/outline'
import { motion } from 'framer-motion'
const ColorfulMenu = () => {
  const containerRef = useRef(null)
  useEffect(() => {
    const background = document.createElement('div')
    background.style.backgroundImage = "url('/bgworkmenu.gif')"
    background.style.backgroundSize = '2000%'
    background.style.backgroundRepeat = 'no-repeat'
    background.style.backgroundPosition = 'center'
    background.style.position = 'absolute'
    background.style.top = '0'
    background.style.left = '0'
    background.style.width = '100%'
    background.style.height = '100%'
    containerRef.current.appendChild(background)

    const blackLayer = document.createElement('div')
    blackLayer.style.backgroundColor = 'black'
    blackLayer.style.position = 'absolute'
    blackLayer.style.top = '0'
    blackLayer.style.left = '0'
    blackLayer.style.width = '100%'
    blackLayer.style.height = '100%'
    blackLayer.style.opacity = '1'
    containerRef.current.appendChild(blackLayer)

    const list = document.createElement('ul')
    list.style.listStyleType = 'none'
    list.style.textAlign = 'center'
    list.style.color = 'white'
    list.style.fontFamily = 'sans-serif'
    list.style.fontWeight = 'bold'
    list.style.fontSize = '100px'
    list.style.textTransform = 'uppercase'
    list.style.position = 'absolute'
    list.style.top = '50%'
    list.style.left = '50%'
    list.style.transform = 'translate(-50%, -50%)'

    list.style.margin = '0'
    list.style.padding = '0'
    list.className = 'portfoliomenu-sprite'

    // create onclick links on each li item below
    const link1 = document.createElement('a')
    link1.href = '/editing'
    link1.appendChild(document.createElement('li')).className = 'editing '

    const link2 = document.createElement('a')
    link2.href = '/gallery'
    link2.appendChild(document.createElement('li')).className = 'original '

    const link3 = document.createElement('a')
    link3.href = '#'
    link3.appendChild(document.createElement('li')).className = 'other '

    list.appendChild(link1)
    list.appendChild(link2)
    list.appendChild(link3)
    blackLayer.appendChild(list)

    blackLayer.style.mixBlendMode = 'darken'

    const list2 = list.cloneNode(true)
    containerRef.current.appendChild(list2)

    list2.addEventListener(
      'mouseover',
      function (event) {
        if (event.target.tagName === 'LI') {
          event.target.style.opacity = '0'
        }
      },
      false
    )

    list2.addEventListener(
      'mouseout',
      function (event) {
        if (event.target.tagName === 'LI') {
          event.target.style.opacity = '1'
        }
      },
      false
    )

    list2.addEventListener(
      'mouseover',
      function (event) {
        if (event.target.tagName === 'LI') {
          event.target.style.transition = 'opacity 0.5s'
        }
      },
      false
    )

    list2.addEventListener(
      'mouseout',
      function (event) {
        if (event.target.tagName === 'LI') {
          event.target.style.transition = 'opacity 0.5s'
        }
      },
      false
    )

    list2.addEventListener(
      'mousedown',
      function (event) {
        if (event.target.tagName === 'LI') {
          event.target.style.userSelect = 'none'
        }
      },
      false
    )

    return () => {
      if (containerRef.current) containerRef.current.innerHTML = '' // Cleanup on component unmount
    }
  }, [])

  return <div ref={containerRef}>{/* Render your page content here */}</div>
}

export default function MenuModal({ isOpen, setIsOpen, image }) {
  const [open, setOpen] = useState(isOpen || false)
  function close() {
    setIsOpen(false)
    setOpen(false)
  }
  useEffect(() => {
    setOpen(isOpen)

    return () => {
      //  second
    }
  }, [isOpen])

  useEffect(() => {
    setIsOpen(open)

    return () => {}
  }, [open])

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-500"
          enterFrom="opacity-0 translate-x-full "
          enterTo="opacity-100 translate-x-0"
          leave="ease-in duration-500"
          leaveFrom="opacity-100 translate-x-0"
          leaveTo="opacity-0 translate-x-full"
        >
          <div className="fixed inset-0 bg-black transition-all" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full min-w-full items-center justify-end text-center ">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-500"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-500"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative h-screen  w-full max-w-sm  transform  rounded-lg px-4 pt-5 pb-4 text-left shadow-xl  transition-all sm:w-full sm:max-w-sm sm:p-6">
                <div className="inline-flex w-full   justify-end">
                  <div
                    type="button"
                    className=" z-40  cursor-pointer px-4 py-2 text-base font-medium text-white"
                    onClick={() => close()}
                  >
                    <XCircleIcon className="h-20" />
                  </div>
                </div>
                <div className=" -mt-16 mr-28 h-full w-full sm:-mt-10 sm:ml-9 ">
                  <div className="portfoliomenu  h-full w-full scale-[1.5] sm:scale-[2] ">
                    <motion.div
                      initial={{ opacity: 0 }}
                      exit={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{
                        delay: 0.2,
                        duration: 1,
                      }}
                      className=""
                    >
                      <ColorfulMenu />
                    </motion.div>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}
