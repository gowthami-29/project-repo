import express from "express"
import cors from "cors"
import dotenv from "dotenv"
dotenv.config()
const app=express()
app.use(cors)
app.use(express.json())

app.listen(6000,()=>{
    console.log(`server running on port 6000`);
    
})