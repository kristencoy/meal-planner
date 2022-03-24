import styles from "../styles/RecipeItem.module.css";

export default function RecipeItem(props) {
  return (
    <li className={styles.card}>
      <h3>{props.title}</h3>
      <p>{props.ingredients.join(", ")}</p>
    </li>
  );
}
