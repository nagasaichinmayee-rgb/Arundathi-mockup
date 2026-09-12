"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./Navbar.module.css";

const links = [
  { label: "Discover AIMS", href: "#discover" },
  { label: "Departments", href: "#departments" },
  { label: "Admissions", href: "#admissions" },
  { label: "Student Resources", href: "#resources" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav
      className={`${styles.nav} ${scrolled ? styles.scrolled : ""}`}
      aria-label="Main navigation"
    >
      <a className={styles.logo} href="/" aria-label="AIMS — Home">
        <Image
          src="/logo.png"
          alt="Arundathi Institute of Medical Sciences"
          width={180}
          height={56}
          priority
          className={styles.logoImg}
        />
      </a>

      <ul className={styles.links} role="list">
        {links.map((l) => (
          <li key={l.href}>
            <a href={l.href} className={styles.link}>
              {l.label}
            </a>
          </li>
        ))}
        <li>
          <a href="#admissions" className={`${styles.link} ${styles.cta}`}>
            Apply Now
          </a>
        </li>
      </ul>

      <button
        className={styles.hamburger}
        aria-label="Open menu"
        aria-expanded="false"
      >
        <span />
        <span />
        <span />
      </button>
    </nav>
  );
}
