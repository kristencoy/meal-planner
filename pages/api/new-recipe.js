import { MongoClient } from "mongodb";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;
    const client = await MongoClient.connect(
      "mongodb+srv://kristen:DB%40dmin45@cluster0.9ifqp.mongodb.net/meal-planner?retryWrites=true&w=majority"
    );
    const db = client.db("meal-planner");
    const recipeCollection = db.collection("recipes");
    const result = await recipeCollection.insertOne(data);
    console.log(result);
    client.close();
  } else {
  }
}
