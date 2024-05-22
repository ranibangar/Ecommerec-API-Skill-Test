// import "./env.js"
import express from "express";
import dotenv from "dotenv";
import productRouter from "./product/product.routes.js";
import { connectUsingMongoose } from "./config/mongooseConfig.js";
import bodyParser from "body-parser";


const server = express();
dotenv.config();


server.use(bodyParser.json()); //to get req body from postman use bodyparser
server.use(bodyParser.urlencoded({ extended: false }));


server.get("/", (req, res) => {
    res.send("Welcome to Ecommerce APIs");
  });

  server.use("/api/products", productRouter);


  //server listening on port
server.listen(4200, () => {
    console.log("server listening on port 4200");
    connectUsingMongoose();
  });