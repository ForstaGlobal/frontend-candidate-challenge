// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import database from "../../util/database";
import {TodoDocument} from "../../components/todo/interfaces";
import {ObjectId} from "bson";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Array<TodoDocument> | unknown>
) {
  try {
    const dbClient = await database.connect();
    if (req.method === "GET") {
      const todos = await dbClient.db("forsta")
          .collection<TodoDocument>("todo")
          .find()
          .sort("createdAt", "desc")
          .toArray();

      return res.status(200).json(todos)
    } else if (req.method === "POST") {
      const todoTitle = req.body.title;
      await dbClient.db("forsta")
          .collection("todo")
          .insertOne({createdAt: new Date(), title: todoTitle})

      return res.status(200).json({message: "success"})
    } else if (req.method === "DELETE") {
      const todoID = req.query.todoID;
      if (todoID === undefined) {
        return res.status(404).json({message: "not found"})
      }
      await dbClient.db("forsta")
          .collection("todo")
          .deleteOne({_id: new ObjectId(todoID as string)})

      await dbClient.db("forsta")
          .collection("todo_item")
          .deleteMany({todo: todoID})

      return res.status(200).json({message: "success"})
    }
    return res.status(403).json({message: "forbidden"})
    // TODO: extend to create and update methods here
  } catch (e) {
    res.status(500).json(e)

  }
}