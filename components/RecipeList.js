import RecipeData from "../data/RecipeData";
import RecipeItem from "./RecipeItem";
import styles from "../styles/RecipeItem.module.css";

// function RecipeList() {
//   //   const [recipes, setRecipes] = useState(RecipeData);

//   const mealData = RecipeData.map((meal) => (
//     <div className={styles.card} key={meal}>
//       {meal}
//     </div>
//   ));

//   return <div className={styles.items}>{mealData}</div>;
// }

// export default RecipeList;

export default function RecipeList() {
  console.log(RecipeData);
  return (
    <ul className={styles.items}>
      {RecipeData.map((recipe) => (
        <RecipeItem
          key={recipe.id}
          id={recipe.id}
          title={recipe.title}
          ingredients={recipe.ingredients}
          instructions={recipe.instructions}
        />
      ))}
    </ul>
  );
}
