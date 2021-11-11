import Link from 'next/link';
import Image from 'next/image';

import gdmIcon from '../public/gdm_icon.png';

import styles from './Navbar.module.scss';

export default function Navbar() {
  return(
    <>
      <nav className="grey darken-4">
        <div className="nav-wrapper">
          <div className="container">
            <div className={styles.logo}>
              <Image
                src={gdmIcon}
                alt="gdm logo"
                width={50}
                height={50}
              />
            </div>
            <button data-target="mobile-menu" class="sidenav-trigger right hide-on-med-and-up"><i class="material-icons">menu</i></button>
            <ul className="right hide-on-small-and-down">
              <li>
                <Link href="/">
                  <a>Home</a>
                </Link>
              </li>
              <li>
                <Link href="/products">
                  <a>Products</a>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <a>About</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <ul className="sidenav" id="mobile-menu">
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/products">
            <a>Products</a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a>About</a>
          </Link>
        </li>
      </ul>
    </>
  )
}