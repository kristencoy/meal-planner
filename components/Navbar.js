import Link from "next/link";
import styles from "../styles/Navbar.module.css";

export default function Navbar() {
  return (
    <>
      <nav className={styles.nav}>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/all-recipes">
          <a>All Recipes</a>
        </Link>
        <Link href="/">
          <a>Weekly Planner</a>
        </Link>
      </nav>
    </>
  );
}
