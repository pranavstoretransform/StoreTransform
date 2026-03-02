"use client";

import Link from "next/link";
import { useState } from "react";
import styles from "./Header.module.css";


const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.container}>

        {/* ================= LOGO ================= */}
        <div className={styles.logo}>
          <Link href="/">
            <img src="/logo.png" alt="Store Transform Logo" />
          </Link>
        </div>

        {/* ================= DESKTOP NAVIGATION ================= */}
        <nav className={styles.nav}>
          <ul className={styles.menu}>

            {/* HOME */}
            <li className={styles.active}>
              <Link href="/">HOME</Link>
            </li>

            {/* ABOUT US */}
            <li className={styles.hasDropdown}>
              <a href="#" className={styles.dropdownTrigger}>
                <span className={styles.menuText}>ABOUT US</span>
                <img src="/downarrow.svg" alt="dropdown" className={styles.dropdownarrow} />
              </a>

              <ul className={styles.dropdown}>
                <li>
                  <Link href="#">OUR TEAM</Link>
                </li>
                <li>
                  <Link href="#">OUR VALUES</Link> 
                </li>
                <li>
                  <Link href="#">OUR CULTURE</Link>
                </li>
                <li>
                  <Link href="#">JOIN OUR TEAM</Link>
                </li>
                <li>
                  <Link href="#">OUR PORTFOLIO</Link>
                </li>
              </ul>
            </li>

            {/* OUR SERVICES */}
            <li className={styles.hasDropdown}>
              <a href="#" className={styles.dropdownTrigger}>
                <span className={styles.menuText}>OUR SERVICES</span>
                <img src="/downarrow.svg" alt="dropdown" className={styles.dropdownarrow} />
              </a>

              <ul className={styles.dropdown}>

                {/* WEB DESIGN SERVICE */}
                <li className={styles.hasSubDropdown}>
                  <a href="#" className={styles.dropdownTrigger}>
                    <span className={styles.menuText}>WEB DESIGN SERVICE</span>
                    <img src="/downarrow.svg" alt="dropdown" className={styles.dropdownarrow} />
                  </a>

                  <ul className={styles.subDropdown}>
                    <li>
                      <Link href="#">UI/UX DESIGN</Link>
                    </li>
                    <li>
                      <Link href="#">CUSTOM WEB DESIGN</Link>
                    </li>
                    <li>
                      <Link href="#">LANDING PAGE DESIGN</Link>
                    </li>
                  </ul>
                </li>

                {/* WEB DEVELOPMENT */}
                <li className={styles.hasSubDropdown}>
                  <a href="#" className={styles.dropdownTrigger}>
                    <span className={styles.menuText}>WEB DEVELOPMENT</span>
                    <img src="/downarrow.svg" alt="dropdown" className={styles.dropdownarrow} />
                  </a>

                  <ul className={styles.subDropdown}>
                    <li>
                      <Link href="#">SHOPIFY DEVELOPMENT</Link>
                    </li>
                    <li>
                      <Link href="#">MAGENTO DEVELOPMENT</Link>
                    </li>
                    <li>
                      <Link href="#">WORDPRESS DEVELOPMENT</Link>
                    </li>
                  </ul>
                </li>

                {/* DIGITAL MARKETING */}
                <li className={styles.hasSubDropdown}>
                  <a href="#" className={styles.dropdownTrigger}>
                    <span className={styles.menuText}>DIGITAL MARKETING</span>
                    <img src="/downarrow.svg" alt="dropdown" className={styles.dropdownarrow} />
                  </a>

                  <ul className={styles.subDropdown}>
                    <li>
                      <Link href="#">PPC MANAGEMENT SERVICE</Link>
                    </li>
                    <li>
                      <Link href="#">SOCIAL MEDIA OPTIMIZATION</Link>
                    </li>
                    <li>
                      <Link href="#">SEARCH ENGINE OPTIMIZATION</Link>
                    </li>
                  </ul>
                </li>

              </ul>
            </li>

            {/* HIRE DEVELOPERS */}
            <li className={styles.hasDropdown}>
              <a href="#" className={styles.dropdownTrigger}>
                <span className={styles.menuText}>HIRE DEVELOPERS</span>
                <img src="/downarrow.svg" alt="dropdown" className={styles.dropdownarrow} />
              </a>

              <ul className={styles.dropdown}>
                <li>
                  <Link href="#">HIRE SHOPIFY DEVELOPER</Link>
                </li>
                <li>
                  <Link href="#">HIRE MAGENTO DEVELOPER</Link>
                </li>
                <li>
                  <Link href="#">HIRE WORDPRESS DEVELOPER</Link>
                </li>
              </ul>
            </li>

            {/* BLOG */}
            <li>
              <Link href="#">BLOG</Link>
            </li>

            {/* CONTACT */}
            <li>
              <Link href="#">CONTACT US</Link>
            </li>

          </ul>
        </nav>

        {/* ================= MOBILE MENU BUTTON ================= */}
        <button
          aria-label="Toggle Menu"
          className={styles.menuButton}
          onClick={() => setOpen((prev) => !prev)}
        >
          ☰
        </button>

        {/* ================= MOBILE NAVIGATION ================= */}
        <nav
          className={`${styles.mobileNav} ${
            open ? styles.open : ""
          }`}
        >
          <ul>

            <li>
              <Link href="/" onClick={() => setOpen(false)}>
                HOME
              </Link>
            </li>

            <li>
              <Link href="#" onClick={() => setOpen(false)}>
                ABOUT US <img src="/downarrow.svg"alt="dropdown"className={styles.dropdownarrow}/>
              </Link>
            </li>

            <li>
              <Link href="#" onClick={() => setOpen(false)}>
                OUR SERVICES <img src="/downarrow.svg"alt="dropdown"className={styles.dropdownarrow}/>
              </Link>
            </li>

            <li>
              <Link href="#" onClick={() => setOpen(false)}>
                HIRE DEVELOPERS <img src="/downarrow.svg"alt="dropdown"className={styles.dropdownarrow}/>
              </Link>
            </li>

            <li>
              <Link href="#" onClick={() => setOpen(false)}>
                BLOG
              </Link>
            </li>

            <li>
              <Link href="#" onClick={() => setOpen(false)}>
                CONTACT US
              </Link>
            </li>

          </ul>
        </nav>

      </div>
    </header>
  );
};

export default Header;