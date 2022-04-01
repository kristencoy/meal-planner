import { useRef } from "react";
import styles from "../styles/NewRecipe.module.css";

export default function NewRecipeForm(props) {
  const titleInputRef = useRef();
  const ingredientsInputRef = useRef();
  const instructionsInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredTitle = titleInputRef.current.value;
    const enteredIngredients = ingredientsInputRef.current.value.split(", ");
    const enteredInstructions = instructionsInputRef.current.value;

    const recipeData = {
      title: enteredTitle,
      ingredients: enteredIngredients,
      instructions: enteredInstructions,
    };

    console.log(recipeData);

    props.onAddRecipe(recipeData);
  };

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={submitHandler}>
        <div className={styles.item}>
          <label className={styles.formLabel} htmlFor="title">
            Recipe Title
          </label>
          <input type="text" id="title" ref={titleInputRef} />
        </div>
        <div className={styles.item}>
          <label className={styles.formLabel} htmlFor="ingredients">
            Ingredients
          </label>
          <textarea id="ingredients" ref={ingredientsInputRef} />
        </div>
        <div className={styles.item}>
          <label className={styles.formLabel} htmlFor="instructions">
            Instructions
          </label>
          <textarea id="instructions" ref={instructionsInputRef} />
        </div>
        <div className={styles.buttonContainer}>
          <button className={styles.button} type="submit">
            Add Recipe
          </button>
        </div>
      </form>
    </div>
  );
}
