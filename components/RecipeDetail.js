import styles from "../styles/RecipeDetail.module.css";

function RecipeDetail(props) {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1>{props.title}</h1>
        <ul>
          {props.ingredients.map((ingredient) => (
            <li key={ingredient._id}>{ingredient}</li>
          ))}
        </ul>
        <p>{props.instructions}</p>
      </div>
    </div>
  );
}

export default RecipeDetail;
