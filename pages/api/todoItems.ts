// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import database from "../../util/database";
import {ObjectId} from "bson";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Array<any> | unknown>
) {
    try {
        const todoID = req.query["todo"]
        const todoItemID = req.query["todoItemID"]
        const dbClient = await database.connect();
        if (req.method === "GET") {
            if (todoID === undefined) {
                return res.status(404).json({ message: "todo list not selected"})
            }
            const todos = await dbClient.db("forsta")
                .collection<any>("todo_item")
                .find({todo: todoID})
                .sort("createdAt", "desc")
                .toArray();
            return res.status(200).json(todos)
        } else if (req.method === "POST") {
            if (todoID === undefined) {
                return res.status(404).json({ message: "todo list not selected"})
            }
            const newItems = req.body;
            await dbClient.db("forsta")
                .collection("todo_item")
                .insertOne({todo: todoID, ...newItems, createdAt: new Date()})
            return res.status(201).json({message: "success"})
        } else if (req.method === "PUT") {
            if (todoItemID === undefined) {
                return res.status(404).json({ message: "todo item id not provided"})
            }
            const { checked } = req.body;
            await dbClient.db("forsta")
                .collection("todo_item")
                .updateOne({_id: new ObjectId(todoItemID as string)}, {$set: {checked: checked}})
            return res.status(200).json({message: "success"})
        } else if (req.method === "DELETE") {
            if (todoItemID === undefined) {
                return res.status(404).json({ message: "todo item id not provided"})
            }
            await dbClient.db("forsta")
                .collection("todo_item")
                .deleteOne({_id: new ObjectId(todoItemID as string)})
            return res.status(200).json({message: "success"})
        }
        return res.status(403).json({message: "forbidden"})
    } catch (e) {
        console.log(e);
        return res.status(500).json(e)
    }
}