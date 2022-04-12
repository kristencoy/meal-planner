import Link from "next/link";
import styles from "../styles/Navbar.module.css";
import { useState } from "react";

export default function Navbar() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const toggleMobileNav = () => {
    setMobileNavOpen(!mobileNavOpen);
  };

  function LinkAnchor({ href, children }) {
    return (
      <Link href={href}>
        <a className={styles.a}>{children}</a>
      </Link>
    );
  }

  return (
    <>
      <nav className={styles.navMain}>
        <div
          className={`${
            mobileNavOpen ? styles.hamburgerOpen : styles.hamburger
          }`}
          onClick={toggleMobileNav}
        >
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
        </div>
        <ul
          className={`${mobileNavOpen ? styles.navMenuMobile : styles.navMenu}`}
        >
          <li className={styles.navItem}>
            <LinkAnchor href="/">Home</LinkAnchor>
          </li>
          <li className={styles.navItem}>
            <LinkAnchor href="/all-recipes">All Recipes</LinkAnchor>
          </li>
          <li className={styles.navItem}>
            <LinkAnchor href="/random">Weekly Planner</LinkAnchor>
          </li>
          <li className={styles.navItem}>
            <LinkAnchor href="/add-new-recipe">Add New Recipe</LinkAnchor>
          </li>
        </ul>
      </nav>
    </>
  );
}
