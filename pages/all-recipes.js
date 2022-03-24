import Link from "next/link";
import styles from "../styles/Recipes.module.css";
import RecipeList from "../components/RecipeList";

export default function Recipes() {
  return (
    <div className={styles.main}>
      <h1 className={styles.title}>Recipes</h1>
      <div className={styles.recipeList}>
        <RecipeList />
      </div>
      <Link href="/">
        <a className={styles.a}>&larr; Return Home</a>
      </Link>
    </div>
  );
}
