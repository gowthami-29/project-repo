import express from "express"
const router=express.Router()
import { getBalance,getStatement,transfer } from "../controllers/accountController.js"
import authMiddleware from "../middlewares/authMiddleware.js"
router.get("/balance",authMiddleware,getBalance)
router.get("/statement",authMiddleware,getStatement)
router.post("/transfer",authMiddleware,transfer)
export default router;