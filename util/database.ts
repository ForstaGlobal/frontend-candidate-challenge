import {MongoClient} from "mongodb";

const uri = process.env.MONGO_URI;

if(uri === undefined) {
    throw new Error ("MONGO_URI needs to be defined in the environment variables.")
}

const client = new MongoClient(uri)

export default client;