import express, { Request, Response, NextFunction } from "express";
import { config } from "dotenv";
config();

const app = express();

//Middlewares
app.use(express.json());

//GET
app.get("/",(req:Request,res:Response,next:NextFunction)=>
{
  return res.send("Hello");
});



export default app;