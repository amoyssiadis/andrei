import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Sidesideportfoliomenu() {
  const router = useRouter()
  //.active-sideportfoliomenu
  const isActive = (name) => {
    let active = ''
    console.log(router.asPath, `/${name}`)
    if (router.asPath === `/${name}`) {
      active = ' active-sideportfoliomenu '
    }
    return active
  }
  return (
    <div className="fixed -right-10 bottom-1/4 sm:bottom-1/3  ">
      <div className="sideportfoliomenu ">
        <ul className="sideportfoliomenu-sprite ">
          <Link href="/editing">
            <a>
              <li className={`${isActive('editing')}`}>
                <div className={`editing filter-black`}></div>
              </li>
            </a>
          </Link>

          <Link href="/gallery">
            <a>
              <li className={`${isActive('gallery')}`}>
                <div className={`original filter-black `}></div>
              </li>
            </a>
          </Link>
          <Link href="/other">
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
