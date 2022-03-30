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

export default function RecipeList(props) {
  //gather list of available recipes to hold in state
  // const [loadedRecipes, setLoadedRecipes] = useState([]);
  // //fetch data when component first mounts/is rendered
  // useEffect(() => {
  //   //fetch http request
  //   setLoadedRecipes(RecipeData);
  // }, []);

  return (
    <ul className={styles.items}>
      {props.recipes.map((recipe) => (
        <RecipeItem
          key={recipe._id}
          id={recipe._id}
          title={recipe.title}
          ingredients={recipe.ingredients}
          instructions={recipe.instructions}
        />
      ))}
    </ul>
  );
}
