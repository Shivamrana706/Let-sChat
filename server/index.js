import express from 'express'
import Connection from './database/db.js';
import dotenv from 'dotenv';
import Route from './routes/routes.js';
import cors from 'cors';
import bodyParser from 'body-parser';



dotenv.config()

const username = process.env.DATABASE_USERNAME;
const password = process.env.DATABASE_PASSWORD;


const app = express();

app.use(cors());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', Route);

const PORT = 8000;


Connection(username, password);




app.listen(PORT, () => console.log(`server running successfull ${PORT}`));






