import express from  "express";
import dotenv from "dotenv";
import connectDB from "./Config/db.js";
import useRoutes from "./Router/UserRouter.js";



dotenv.config();
const app =  express();



connectDB();

app.get("/",(req, res)=>{
    res.send("server is running");
});

app.get("/api/users" ,useRoutes);

const PORT = process.env.PORT ||3000;

app.listen(PORT,()=> {
    console.log("server is running on port",PORT);
});