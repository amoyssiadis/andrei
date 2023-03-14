import Link from 'next/link'

export default function Sidesideportfoliomenu() {
  return (
    <div className="fixed -right-10 bottom-1/4 sm:bottom-1/3  ">
      <div className="sideportfoliomenu ">
        <ul className="sideportfoliomenu-sprite ">
          <Link href="/editing">
            <a>
              <li>
                <div className="editing filter-black"></div>
              </li>
            </a>
          </Link>

          <Link href="/gallery">
            <a>
              <li>
                <div className="original filter-black"></div>
              </li>
            </a>
          </Link>
          <Link href="/other">
            <a>
              <li>
                <div className="other filter-black"></div>
              </li>
            </a>
          </Link>
        </ul>
      </div>
    </div>
  )
}
