import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios"

function Login(){

    const [email,setEmail]=useState("")
    const [password,setpassword]=useState("")
    const navigate=useNavigate()
    const login=async()=>{
        const res=await axios.post("http://localhost:6001/api/auth/login",{
            email,password

        })
        localStorage.setItem("token",res.data.token)
        navigate("/dashboard")
    };
    return(
        <div>
            <h2>login</h2>
           
            <input placeholder="Email" onChange={(e)=>setEmail(e.target.value)}/>
            <input placeholder="Password" onChange={(e)=>setpassword(e.target.value)}/>
            <button onClick={login}>Signup</button>

        </div>
    )
}
export default Login;