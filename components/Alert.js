import { CheckCircleIcon, XMarkIcon } from '@heroicons/react/20/solid'
import { useEffect, useState } from 'react'
import useWindowDimensions from '../lib/useWindowDimensions'

export default function Alert({ email, isOpen, setIsOpen, variation = null }) {
  const [open, setOpen] = useState(isOpen || false)
  function close() {
    setIsOpen(false)
    setOpen(false)
  }
  useEffect(() => {
    setOpen(isOpen)
    // console.log("isOpen mudou")
    return () => {
      //  second
    }
  }, [isOpen])

  useEffect(() => {
    setIsOpen(open)
    //console.log("open mudou")
    return () => {
      //  TODO HERE CHECK THIS JS
    }
  }, [open])
  function close() {
    setIsOpen(false)
    setOpen(false)
  }
  const { width, height } = useWindowDimensions()
  let alertVariationClass = 'mt-[12.5rem] sm:mt-[20rem]' //default variation value

  if (variation === 'gallery') {
    alertVariationClass = 'text-white'
  }
  if (variation === 'gallery' && width > 1000) {
    alertVariationClass =
      alertVariationClass + ' mt-[12.5rem] sm:mt-[0rem] sm:right-1/3 '
  } else if (variation === 'gallery' && width <= 1000) {
    alertVariationClass = alertVariationClass + ' mt-[12.5rem] sm:mt-[20rem] '
  }
  return (
    <div className={`${alertVariationClass} absolute  px-2    `}>
      {open && (
        <div className="rounded-md">
          <div className="flex">
            {/* <div className="flex-shrink-0">
              <CheckCircleIcon
                className="h-5 w-5 text-green-400"
                aria-hidden="true"
              />
            </div> */}
            <div className="ml-3">
              <p className="text-center text-base tracking-wider ">
                {email} has been copied to your clipboard
              </p>
            </div>
            {/*<div className="ml-auto pl-3">
              <div className="-mx-1.5 -my-1.5">
                <button
                  type="button"
                  className="inline-flex rounded-md bg-green-50 p-1.5 text-green-500 hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2 focus:ring-offset-green-50"
                >
                  <span className="sr-only">Dismiss</span>
                  <XMarkIcon
                    className="h-5 w-5"
                    aria-hidden="true"
                    onClick={close}
                  />
                </button>
              </div>
            </div> */}
          </div>
        </div>
      )}
    </div>
  )
}
