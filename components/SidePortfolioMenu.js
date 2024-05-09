import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Sidesideportfoliomenu() {
  const router = useRouter()
  const isActive = (name) => {
    let active = ''
    if (router.asPath === `/${name}`) {
      active = ' active-sideportfoliomenu '
    }
    return active
  }
  return (
    <div className="fixed -right-10 bottom-[38%] sm:bottom-1/3 z-50">
      <div className="sideportfoliomenu">
        <ul className="sideportfoliomenu-sprite">
          <Link href="/editing">
            <a>
              <li className={`${isActive('editing')}`}>
                <div className={`editing filter-black`}></div>
              </li>
            </a>
          </Link>

          <Link href="/original">
            <a>
              <li className={`${isActive('original')}`}>
                <div className={`original filter-black `}></div>
              </li>
            </a>
          </Link>
          <Link href="#">
            <a>
              <li className={`${isActive('other')}`}>
                <div className={`other filter-black `}></div>
              </li>
            </a>
          </Link>
        </ul>
      </div>
    </div>
  )
}
