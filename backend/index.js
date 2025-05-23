import dotenv from "dotenv";
dotenv.config();
import express from "express";

import cookieParser from "cookie-parser";
import connectDB from "./config/db.js";

const port = process.env.PORT || 5000;

connectDB();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(port, () => console.log(`Server is running on port: ${port}`));
