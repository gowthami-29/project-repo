import bcrypt from "bcrypt"
import supabase from "../config/supabaseClient.js"
import generateToken from "../utils/generateToken.js"

export const signup = async (req,res)=>{
    const {name,email,password} = req.body

    const hashed = await bcrypt.hash(password,10)

    const {data,error} = await supabase
    .from("userrrs")
    .insert([{name,email,password:hashed,balance:10000}])
    .select()
    console.log(data);
    

    if(error){
        return res.status(400).json(error)
    }

    res.json(data)
}


export const login = async (req,res)=>{
    const {email,password} = req.body

    const {data,error} = await supabase
    .from("userrrs")
    .select("*")
    .eq("email",email)
    .single()

    if(!data){
        return res.status(404).json({
            message:"user not found"
        })
    }

    const valid = await bcrypt.compare(password,data.password)

    if(!valid){
        return res.status(401).json({
            message:"wrong password"
        })
    }

    const token = generateToken(data)

    res.json({token,user:data})
}