import { connectToDatabase } from "../../lib/mongodb";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;
    const { db } = connectToDatabase();
    const recipeCollection = db.collection("recipes");
    const result = await recipeCollection.insertOne(data);
    client.close();
    res.status(201).json({ message: "Successfully added." });
  } else {
  }
}
