import mongoose from "mongoose";
import cors from "cors";
import express from "express";
import dotenv from "dotenv";
import {test} from "./backend/constrollers/alumno.controller.js"

dotenv.config()
mongoose.connect(process.env.url_db)
.then(()=>{
    console.log("fimciona la base")
})
.catch((error)=>{
    console.log("no funciona ya salio", error)
})

const app=express();
app.use(cors());
app.listen(4000, ()=>{
    console.log("si jalo")
})

test()