import { Fragment, useEffect, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { CheckIcon, XCircleIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

// const CloseIcon = () => {
//   return (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
//   <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
// </svg>
// )}

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
          enter="ease-out duration-300"
          enterFrom="opacity-0 translate-x-full "
          enterTo="opacity-100 translate-x-0"
          leave="ease-in duration-300"
          leaveFrom="opacity-100 translate-x-0"
          leaveTo="opacity-0 translate-x-full"
        >
          <div className="fixed inset-0 bg-black transition-all" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full min-w-full items-center justify-end text-center ">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative h-screen  transform  rounded-lg  px-4 pt-5 pb-4 text-left shadow-xl transition-all  sm:w-full sm:max-w-sm sm:p-6">
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
                    <ul className="portfoliomenu-sprite ">
                      <Link href="/editing">
                        <a>
                          <li className="editing"></li>
                        </a>
                      </Link>

                      <Link href="/gallery">
                        <a>
                          <li className="original"></li>
                        </a>
                      </Link>
                      <Link href="/other">
                        <a>
                          <li className="other"></li>
                        </a>
                      </Link>
                    </ul>
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
