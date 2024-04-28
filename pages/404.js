/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import GrainedEffect from '../components/GrainedEffect'
import Image from 'next/image'

export default function FourOhFour() {
  return (
    <>
      <GrainedEffect>
        <div className="flex flex-col items-center justify-center    ">
          <div className="flex h-screen w-screen  items-center justify-center bg-[url('/logobg.webp')] text-center  ">
            <Link href="/">
              <a>
                <div className="flex flex-col items-center justify-center px-6">
                  <img
                    alt="Page not Found"
                    src="/404.svg"
                    className="sm:w-[400px] mdc:w-[600px] lgc:w-[900px]"
                  />
                  <img
                    alt="Click to go back"
                    src="/pagenotfound.svg"
                    className="w-[280px] object-contain object-center"
                  />
                </div>
              </a>
            </Link>
          </div>
        </div>
      </GrainedEffect>
    </>
  )
}
