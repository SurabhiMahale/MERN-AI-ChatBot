import express, { Request, Response, NextFunction } from "express";
import { config } from "dotenv";
import morgan from "morgan";
import appRouter from "./routes/index.js";
import cookieParser from "cookie-parser";
config();

const app = express();

//Middlewares
app.use(express.json());
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(morgan("dev"));

app.use("/api/v1", appRouter);
//GET
// app.get("/",(req:Request,res:Response,next:NextFunction)=>
// {
//   return res.send("Hello");
// });



export default app;