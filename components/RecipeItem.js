import styles from "../styles/RecipeItem.module.css";
import FavoriteStar from "./FavoriteStar";
import Link from "next/link";

export default function RecipeItem(props) {
  return (
    <div>
      <li className={styles.card}>
        <div className={styles.star}>
          <FavoriteStar />
        </div>
        <Link href={`/recipes/${props.id}`}>
          <a className={styles.a}>{props.title}</a>
        </Link>
      </li>
    </div>
  );
}

//recipe item > recipe list > all recipes page

//home page > view all recipes || plan week (select num of days needed)

//√ all recipes page > click recipe item > go to recipe page
// recipe page: recipe title, instructions, ingredients, maybe picture
// -could also just do a recipe card vs a full page

//√ todo: add recipe page with recipe details
//√      add clickable link on card to go to page

// todo: add ability to favorite - click star, add fav class

// todo: add ability to shuffle - Math.random to grab index of array of objects/recipes

//√ todo: add db of recipes - mongo vs. firebase

//√ todo: add form to create own recipes
