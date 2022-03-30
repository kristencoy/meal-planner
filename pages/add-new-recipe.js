import Link from "next/link";
import NewRecipeForm from "../components/NewRecipeForm";
import styles from "../styles/NewRecipe.module.css";

function NewRecipePage() {
  async function addRecipeHandler(recipeData) {
    const response = await fetch("/api/new-recipe", {
      method: "POST",
      body: JSON.stringify(recipeData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();
  }

  return (
    <div className={styles.card}>
      <h1>Add A New Recipe</h1>
      <p>5-6 ingredients, simple instructions</p>
      <NewRecipeForm onAddRecipe={addRecipeHandler} />
      <Link href="/">
        <a className={styles.a}>&larr; Return Home</a>
      </Link>
    </div>
  );
}

export default NewRecipePage;
