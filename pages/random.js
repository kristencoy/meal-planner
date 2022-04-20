import { connectToDatabase } from "../lib/mongodb";
import RecipeItem from "../components/RecipeItem";
import styles from "../styles/RecipeItem.module.css";
import Navbar from "../components/Navbar";
import CollapsibleIngredients from "../components/CollapsibleIngredients";

export default function RandomPage(props) {
  const days = props.randRecipes.map((recipe) => (
    <RecipeItem
      key={recipe._id}
      id={recipe._id}
      title={recipe.title}
      ingredients={recipe.ingredients}
      instructions={recipe.instructions}
    />
  ));

  const ingredientsListLI = () => {
    const ingredients = props.randRecipes.map((recipe) => recipe.ingredients);
    let list = [];
    ingredients.forEach((element) => {
      list.push(...element);
    });
    return list.map((ingredient) => <li>{ingredient}</li>);
  };

  const ingredientsList = <ul>{ingredientsListLI()}</ul>;

  return (
    <>
      <Navbar />
      <div className={styles.randContent}>
        {/* <div className={styles.titleContainer}>
          <h1 className={styles.title}>5 Day Meal Planner</h1>
        </div> */}
        <div className={styles.container}>
          <h1 className={styles.title}>5 Day Meal Planner</h1>
          <div className={styles.grid}>
            {/* {props.randRecipes.map((recipe) => (
          <RecipeItem
            key={recipe._id}
            id={recipe._id}
            title={recipe.title}
            ingredients={recipe.ingredients}
            instructions={recipe.instructions}
          />
        ))} */}
            <div className={styles.dayContainer}>
              {days[0]}
              <h2>Monday</h2>
            </div>
            <div className={styles.dayContainer}>
              {days[1]}
              <h2>Tuesday</h2>
            </div>
            <div className={styles.dayContainer}>
              {days[2]}
              <h2>Wednesday</h2>
            </div>
            <div className={styles.dayContainer}>
              {days[3]}
              <h2>Thursday</h2>
            </div>
            <div className={styles.dayContainer}>
              {days[4]}
              <h2>Friday</h2>
            </div>
          </div>
        </div>
        <div className={styles.ingredientsContainer}>
          <CollapsibleIngredients ingredientsList={ingredientsList} />
          {/* <ul>{ingredientsList()}</ul> */}
        </div>
      </div>
    </>
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
