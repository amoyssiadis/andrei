import { Fragment, useEffect, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { CheckIcon, XCircleIcon } from '@heroicons/react/24/outline'
import CustomVideoPlayer from './CustomVideoPlayer'

export default function GalleryModal({ isOpen, setIsOpen, media }) {
  const [open, setOpen] = useState(isOpen || false)
  const [mediaItem, setMediaItem] = useState(media || null)
  function close() {
    setIsOpen(false)
    setOpen(false)
  }
  useEffect(() => {
    setOpen(isOpen)
    setMediaItem(media)
    return () => {
      //  second
    }
  }, [isOpen])

  useEffect(() => {
    setIsOpen(open)
    setMediaItem(media)
    return () => {}
  }, [open])

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black  transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="mx-auto flex  max-w-7xl items-center justify-center text-center ">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative  w-full transform overflow-hidden  rounded-lg px-4 pt-5 pb-4 text-left shadow-xl  transition-all  sm:p-6">
                <div className="inline-flex w-full justify-end">
                  <div
                    type="button"
                    className=" cursor-pointer px-4 py-2 text-base font-medium text-white hover:text-gray-400"
                    onClick={() => close()}
                  >
                    <XCircleIcon className="h-20" />
                  </div>
                </div>
                <div className="player-wrapper inline-flex w-full  items-center justify-center  px-4 py-2 text-base font-medium text-white">
                  {media && media.media.url && (
                    <div className="react-player aspect-video h-full w-full text-white">
                      <CustomVideoPlayer url={media.media.url} />
                      {/* <ReactPlayer url={['http://localhost:3000/video.mp4']}
                    // { "/video.mp4" || media.media.url}
                    width="100%" height="100%" controls={true} loop={true} fallback={<div className='text-2xl text-white font-extrabold'>Loading...</div>} /> */}
                    </div>
                  )}
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}
