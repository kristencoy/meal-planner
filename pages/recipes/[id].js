import RecipeDetail from "../../components/RecipeDetail";
import Navbar from "../../components/Navbar";
import styles from "../../styles/RecipeDetail.module.css";
import { MongoClient, ObjectId } from "mongodb";
import Link from "next/link";

export default function RecipePage(props) {
  return (
    <>
      <Navbar />
      <RecipeDetail
        title={props.recipeData.title}
        ingredients={props.recipeData.ingredients}
        instructions={props.recipeData.instructions}
      />
      <Link href="/all-recipes">
        <a className={styles.a}>&larr; Back to All Recipes</a>
      </Link>
    </>
  );
}

export async function getStaticPaths() {
  //return possible ids
  const client = await MongoClient.connect(
    "mongodb+srv://kristen:DB%40dmin45@cluster0.9ifqp.mongodb.net/meal-planner?retryWrites=true&w=majority"
  );
  const db = client.db("meal-planner");
  const recipeCollection = db.collection("recipes");
  let data = await recipeCollection.find().toArray();
  data = JSON.parse(JSON.stringify(data));
  const paths = data.map((recipe) => {
    return {
      params: { id: recipe._id.toString() },
    };
  });

  client.close();

  return {
    paths,
    fallback: false,
    //revalidate regerenates the data based on the seconds you set
    //it ensures that your data is not older than x seconds
    //this way you dont have to redeploy to update the data
    //revalidate: 3600
  };
}

export async function getStaticProps(context) {
  //get data associated with id
  const recipeId = context.params.id;
  const client = await MongoClient.connect(
    "mongodb+srv://kristen:DB%40dmin45@cluster0.9ifqp.mongodb.net/meal-planner?retryWrites=true&w=majority"
  );
  const db = client.db("meal-planner");
  const recipeCollection = db.collection("recipes");
  const selectedRecipe = await recipeCollection.findOne({
    _id: ObjectId(recipeId),
  });

  client.close();

  return {
    props: {
      recipeData: {
        id: selectedRecipe._id.toString(),
        title: selectedRecipe.title,
        ingredients: selectedRecipe.ingredients,
        instructions: selectedRecipe.instructions,
      },
    },
  };
}
