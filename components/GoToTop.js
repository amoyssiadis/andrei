import Image from 'next/image'
import { useRouter } from 'next/router'
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
  const router = useRouter()
  if (router.asPath === '/' || router.asPath === '/pt-br') return null
  return (
    <>
      {show && (
        <div className="filter-white fixed left-0 sm:left-2 lgc:left-16 bottom-0 sm:bottom-6 lg:bottom-8 scale-50 text-white">
          <a href="#">
            <Image src="/gototop.svg" width={74} height={120} alt="Go to Top" />
          </a>
        </div>
      )}
    </>
  )
}
