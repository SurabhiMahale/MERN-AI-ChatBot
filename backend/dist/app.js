import express from "express";
import { config } from "dotenv";
config();
const app = express();
//Middlewares
app.use(express.json());
//GET
app.get("/", (req, res, next) => {
    return res.send("Hello");
});
export default app;
//# sourceMappingURL=app.js.map