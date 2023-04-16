import Link from 'next/link'
import GrainedEffect from '../components/GrainedEffect'

export default function FourOhFour() {
  return (
    <>
      <GrainedEffect>
        <div className="flex flex-col items-center justify-center   ">
          <div className="flex h-screen w-screen  items-center justify-center bg-[url('/logobg.webp')]   text-center  ">
            <Link href="/">
              <a>
                <h1>404</h1>
                <h2>Page not found</h2>
              </a>
            </Link>
          </div>
        </div>
      </GrainedEffect>
    </>
  )
}
