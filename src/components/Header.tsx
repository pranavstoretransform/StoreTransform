// components/Header.tsx
"use client";
import Link from "next/link";
import { useState } from "react";
import styles from "./Header.module.css";

const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <img src="/logo.png" alt="Store Transform Logo" />
        </div>

        <nav className={styles.nav}>
          <ul>
            <li className={styles.active}>
              <Link href="/">HOME</Link>
            </li>
            <li>
              <Link href="#">ABOUT US</Link>
            </li>
            <li>
              <Link href="#">OUR SERVICES</Link>
            </li>
            <li>
              <Link href="#">HIRE DEVELOPERS</Link>
            </li>
            <li>
              <Link href="#">BLOG</Link>
            </li>
            <li>
              <Link href="#">CONTACT US</Link>
            </li>
          </ul>
        </nav>

        <button
          aria-label="Open menu"
          className={styles.menuButton}
          onClick={() => setOpen((v) => !v)}
        >
          ☰
        </button>

        <nav className={`${styles.mobileNav} ${open ? styles.open : ""}`}>
          <ul>
            <li className={styles.active}>
              <Link href="/" onClick={() => setOpen(false)}>HOME</Link>
            </li>
            <li>
              <Link href="#" onClick={() => setOpen(false)}>ABOUT US</Link>
            </li>
            <li>
              <Link href="#" onClick={() => setOpen(false)}>OUR SERVICES</Link>
            </li>
            <li>
              <Link href="#" onClick={() => setOpen(false)}>HIRE DEVELOPERS</Link>
            </li>
            <li>
              <Link href="#" onClick={() => setOpen(false)}>BLOG</Link>
            </li>
            <li>
              <Link href="#contact" onClick={() => setOpen(false)}>CONTACT US</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header; 
