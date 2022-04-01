import RecipeDetail from "../../components/RecipeDetail";
import Navbar from "../../components/Navbar";
import styles from "../../styles/RecipeDetail.module.css";
import { ObjectId } from "mongodb";
import { connectToDatabase } from "../../lib/mongodb";
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
      <div className={styles.container}>
        <Link href="/all-recipes">
          <a className={styles.a}>&larr; Back to All Recipes</a>
        </Link>
      </div>
    </>
  );
}

export async function getStaticPaths() {
  //return possible ids
  const { db } = await connectToDatabase();
  const recipeCollection = db.collection("recipes");
  let data = await recipeCollection.find().toArray();
  data = JSON.parse(JSON.stringify(data));
  const paths = data.map((recipe) => {
    return {
      params: { id: recipe._id.toString() },
    };
  });

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
  const { db } = await connectToDatabase();
  const recipeCollection = db.collection("recipes");
  const selectedRecipe = await recipeCollection.findOne({
    _id: ObjectId(recipeId),
  });

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
