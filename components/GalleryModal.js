import { Fragment, useEffect, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { CheckIcon,XCircleIcon } from '@heroicons/react/24/outline'
import CustomVideoPlayer from './CustomVideoPlayer'

export default function GalleryModal({isOpen, setIsOpen, media}) {
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
    return () => {
    
    }
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
          <div className="flex h-screen items-center mx-auto max-w-7xl justify-center text-center ">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative  transform overflow-hidden rounded-lg  px-4 pt-5 pb-4 text-left shadow-xl transition-all  w-full  sm:p-6">
              <div className="inline-flex w-full justify-end">
                  <button
                    type="button"
                    className=" px-4 py-2 text-base font-medium text-white"
                    onClick={() => close()}
                  > 
                    <XCircleIcon className="h-20" />
                  </button>
                  
                </div>
                <div className="player-wrapper inline-flex w-full  justify-center items-center  px-4 py-2 text-base font-medium text-white">
                  
                  { media && media.media.url && 
                  (<div className='react-player w-full h-full aspect-video bg-gray-700 text-white'>
                    <CustomVideoPlayer url={media.media.url} />
                    {/* <ReactPlayer url={['http://localhost:3000/video.mp4']}
                    // { "/video.mp4" || media.media.url} 
                    width="100%" height="100%" controls={true} loop={true} fallback={<div className='text-2xl text-white font-extrabold'>Loading...</div>} /> */}
                  </div>)}
                </div>
                
                
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}
