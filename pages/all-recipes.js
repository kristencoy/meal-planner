import Link from "next/link";
import styles from "../styles/Recipes.module.css";
import RecipeList from "../components/RecipeList";
import { connectToDatabase } from "../lib/mongodb";

function LinkAnchor({ href, children }) {
  return (
    <Link href={href}>
      <a className={styles.a}>{children}</a>
    </Link>
  );
}

export default function Recipes(props) {
  return (
    <div className={styles.main}>
      <span>
        <h1 className={styles.title}>Recipes</h1>
        <LinkAnchor href="/">Home</LinkAnchor>
        <LinkAnchor href="/random">View 5 Day Random</LinkAnchor>
        <LinkAnchor href="/add-new-recipe">Add New Recipe</LinkAnchor>
      </span>
      <div className={styles.recipeList}>
        <RecipeList recipes={props.recipeData} />
      </div>
      <LinkAnchor href="/">&larr; Return Home</LinkAnchor>
    </div>
  );
}

export async function getStaticProps() {
  // //get data associated with id
  // // const uri =
  // //   "mongodb+srv://kristen:DB@dmin45@cluster0.9ifqp.mongodb.net/meal-planner?retryWrites=true&w=majority";
  // const client = await MongoClient.connect(
  //   "mongodb+srv://kristen:DB%40dmin45@cluster0.9ifqp.mongodb.net/meal-planner?retryWrites=true&w=majority"
  // );
  // const db = client.db("meal-planner");
  // const recipeCollection = db.collection("recipes");
  // let recipeData = await recipeCollection.find().toArray();
  // recipeData = JSON.parse(JSON.stringify(recipeData));

  // client.close();

  const { db } = await connectToDatabase();
  let recipeData = await db.collection("recipes").find({}).toArray();
  recipeData = JSON.parse(JSON.stringify(recipeData));
  console.log(recipeData);

  return {
    props: { recipeData },
    //revalidate regerenates the data based on the seconds you set
    //it ensures that your data is not older than x seconds
    //this way you dont have to redeploy to update the data
    //revalidate: 3600
  };
}

//getServerSideProps doesnt run during the build process, but runs
//on the server after deployment. It never runs on the client. Meaning
//also that you can use your credentials in here. You ultimately return
//your props object. Runs for every incoming request.
//You can add in a context parameter, where you get access to the req and
//res objects that are sent back.
//    const req = context.req
//    const res = context.res
//This is really only used if your data changes a LOT or if you need context.req/res
