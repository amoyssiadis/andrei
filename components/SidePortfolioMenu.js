import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Sidesideportfoliomenu() {
  const router = useRouter()
  const isActive = (name) => {
    let active = false
    if (router.asPath === `/${name}`) {
      active = true
    }
    return active
  }
  return (
    <div className="fixed -right-4 bottom-1/4 sm:bottom-1/3">
      <ul className="flex flex-col gap-y-2">
        <Link href="/editing">
          <a>
            <li
              className={`transform cursor-pointer rounded-l-lg bg-white py-1 pl-4 pr-8 transition-all duration-300 ease-in-out lg:py-2 ${
                isActive('editing') ? '-translate-x-4 scale-105' : ''
              } hover:-translate-x-4 hover:scale-105`}
            >
              <p className="text-sm font-semibold text-black lg:text-lg lg:font-bold">
                Editing
              </p>
            </li>
          </a>
        </Link>
        <Link href="/original">
          <a>
            <li
              className={`transform cursor-pointer rounded-l-lg bg-white py-1 pl-4 pr-8 transition-all duration-300 ease-in-out lg:py-2 ${
                isActive('original') ? '-translate-x-4 scale-105' : ''
              } hover:-translate-x-4 hover:scale-105`}
            >
              <p className="text-sm font-semibold text-black lg:text-lg lg:font-bold">
                Original
              </p>
            </li>
          </a>
        </Link>
        <Link href="#">
          <a>
            <li
              className={`transform cursor-pointer rounded-l-lg bg-white py-1 pl-4 pr-8 transition-all duration-300 ease-in-out lg:py-2 ${
                isActive('#') ? '-translate-x-4 scale-105' : ''
              } hover:-translate-x-4 hover:scale-105`}
            >
              <p className="text-sm font-semibold text-black lg:text-lg lg:font-bold">
                Other
              </p>
            </li>
          </a>
        </Link>
      </ul>
    </div>
  )
}
