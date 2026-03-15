import { useEffect, useState } from "react";
import axios from "axios"
import { Link } from "react-router-dom";
function Dashboard(){
    const [balance,setBalance]=useState(0)
    const token=localStorage.getItem("token")
    useEffect(()=>{
        axios.get("http://localhost:6001/api/auth/balance",{
            headers:{Authorization:`Bearer ${token}`}
        })
        .then((res)=>setBalance(res.data.balance))
    },[])
    return(
        <div>
            <h2>Dashboard</h2>
            <h3>Balance: {balance}</h3>
            <Link to="/send">send Money</Link>
            <br/>
            <Link to="/statement">Account</Link>

        </div>
    )
}
export default Dashboard;