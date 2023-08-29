import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import { database } from './db';

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.get('/', (req: Request, res: Response) => {
    res.json(database);
});

app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});