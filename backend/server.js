import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import authRoutes from "./routes/authRoutes.js"
import accountRoutes from "./routes/accountRoutes.js"
import dbConnectionCheck from "./utils/dbHealthcheck.js"
dotenv.config()
const app=express()
app.use(cors)
app.use(express.json())
app.use("/api/auth",authRoutes)
app.use("/api/account",accountRoutes)
const PORT=6001
app.listen(PORT,async()=>{
    try {
        await dbConnectionCheck()
        console.log(`server is running on port ${PORT} `)
    } catch (error) {
        console.log("error occured while starting our server");
        
    }
})