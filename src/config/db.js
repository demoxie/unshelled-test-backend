import {MongoClient} from "mongodb";
import dbConfig from "./db-config.js";
const db = dbConfig();

const url = `mongodb://${db.HOST}:${db.PORT}/${db.NAME}`;

const connection = new MongoClient(url,{monitorCommands: true})
connection.connect().then(r => console.log("Connected to MongoDB")).catch(e => console.log(e))
export default connection
