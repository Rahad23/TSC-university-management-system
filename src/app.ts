import express, { Application, Request, Response } from 'express';
const app = express();
import cors from 'cors';

app.use(cors())

// parser
app.use(express.json())
app.use(express.urlencoded({extended: true}));

// testing route
app.get('/', (req:Request, res:Response) => {
  res.send('Hello World!')
})

export default app;