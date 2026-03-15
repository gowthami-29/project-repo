import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios"

function Signup(){
    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const [password,setpassword]=useState("")
    const navigate=useNavigate()
    const signup=async()=>{
        const res=await axios.post("http://localhost:6001/api/auth/signup",{
            name,email,password

        })
        localStorage.setItem("token",res.data.token)
        navigate("/dashboard")
    };
    return(
        <div>
            <h2>signup</h2>
            <input placeholder="Name" onChange={(e)=>setName(e.target.value)}/>
            <input placeholder="Email" onChange={(e)=>setEmail(e.target.value)}/>
            <input placeholder="Password" onChange={(e)=>setpassword(e.target.value)}/>
            <button onClick={signup}>Signup</button>

        </div>
    )
}
export default Signup;