import Image from 'next/image'
import { useEffect, useState } from 'react'

export default function GoToTop() {
  const [clientWindowHeight, setClientWindowHeight] = useState()
  const [show, setShow] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  })

  const handleScroll = () => {
    setClientWindowHeight(window.scrollY)
  }

  useEffect(() => {
    // console.log({ clientWindowHeight })
    if (clientWindowHeight > 50) {
      setShow(true)
    } else {
      setShow(false)
    }
  }, [clientWindowHeight])

  return (
    <>
      {show && (
        <div className="sm:bottom-1/5 filter-white fixed left-1/4 bottom-1/4  ml-8 scale-75  text-white ">
          <a href="#">
            <Image src="/gototop.svg" width={94} height={150} alt="Go to Top" />
          </a>
        </div>
      )}
    </>
  )
}
