import Link from "next/link";
import styles from "../styles/Navbar.module.css";

export default function Navbar() {
  function LinkAnchor({ href, children }) {
    return (
      <Link href={href}>
        <a className={styles.a}>{children}</a>
      </Link>
    );
  }

  return (
    <>
      <nav className={styles.nav}>
        <LinkAnchor href="/">Home</LinkAnchor>
        <LinkAnchor href="/all-recipes">All Recipes</LinkAnchor>
        <LinkAnchor href="/random">Weekly Planner</LinkAnchor>
        <LinkAnchor href="/add-new-recipe">Add New Recipe</LinkAnchor>
      </nav>
    </>
  );
}
