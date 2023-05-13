import { CheckCircleIcon, XMarkIcon } from '@heroicons/react/20/solid'
import { useEffect, useState } from 'react'
import useWindowDimensions from '../lib/useWindowDimensions'
import { motion, AnimatePresence } from 'framer-motion'

export default function Alert({ email, isOpen, setIsOpen, variation = null }) {
  const [open, setOpen] = useState(isOpen || false)
  useEffect(() => {
    setOpen(isOpen)
  }, [isOpen])

  useEffect(() => {
    if (open) {
      setTimeout(() => {
        setIsOpen(false)
        setOpen(false)
      }, 4000)
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
    <AnimatePresence>
      {open && (
        <motion.div
          key="alert"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className={`${alertVariationClass} absolute px-2`}
        >
          <div className="rounded-md">
            <div className="flex">
              <div className="ml-3">
                <p className="text-center text-xs tracking-wider  sm:text-sm md:text-base ">
                  {email} has been copied
                  <span className="hidden sm:inline"> to your clipboard</span>
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
