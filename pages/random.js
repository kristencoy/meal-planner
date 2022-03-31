import { connectToDatabase } from "../lib/mongodb";
import RecipeItem from "../components/RecipeItem";
import styles from "../styles/RecipeItem.module.css";

export default function RandomPage(props) {
  return (
    <div>
      <h1>5 Day Meal Planner</h1>
      <ul className={styles.items}>
        {props.randRecipes.map((recipe) => (
          <RecipeItem
            key={recipe._id}
            id={recipe._id}
            title={recipe.title}
            ingredients={recipe.ingredients}
            instructions={recipe.instructions}
          />
        ))}
      </ul>
    </div>
  );
}

export async function getStaticProps() {
  const { db } = await connectToDatabase();
  let randRecipes = await db
    .collection("recipes")
    .aggregate([{ $sample: { size: 5 } }])
    .toArray();
  randRecipes = JSON.parse(JSON.stringify(randRecipes));

  return {
    props: { randRecipes },
  };
}
