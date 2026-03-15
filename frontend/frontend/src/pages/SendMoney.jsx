import {  useState } from "react";
import axios from "axios"
function sendMoney(){
    const [receiverEmail,setReceiverEmail]=useState("");
    const [amount,setAmount]=useState("")
    const token=localStorage.getItem("token")
    const sendMoney=async()=>{
        await axios.post("http:localhost:6001/api/account/transfer",
            {receiverEmail,amount},{
                headers:{Authorization:`Bearer ${token}`}
            }
        )
        alert ("transfer sucessfull")
    }
    return(
        <div>
            <h2>Send Money</h2>
            <input placeholder="Receiver Email" onChange={(e)=>setReceiverEmail(e.target.value)}/>
            <input placeholder="Amount" onChange={(e)=>setAmount(e.target.value)}/>
            <button onClick={sendMoney}>Send</button>
        </div>
    )
}
export default sendMoney;