import { useState } from "react";
import styles from "../styles/RecipeItem.module.css";

function CollapsibleIngredients(props) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <button
        className={styles.collapseButton}
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? "Hide Shopping List" : "Show Shopping List"}
      </button>
      <div
        className={`${styles.collapseContent} ${
          isOpen ? styles.openIngred : styles.closedIngred
        }`}
      >
        {props.ingredientsList}
      </div>
    </>
  );
}

export default CollapsibleIngredients;
