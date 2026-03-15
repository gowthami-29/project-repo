import {  useEffect, useState } from "react";
import axios from "axios"
function Statement(){
    const [transactions,setTransactions]=useState([])
    const token=localStorage.getItem("token")
    useEffect(()=>{
        axios.get("http:localhost:6001/api/account/statement"),
        {headers:{Authorization:`Bearer ${token}`}}
    },[])
    return(
        <div>
            <h2>Account Statement</h2>
            <table border="1">
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Type</th>
                        <th>Amount</th>
                    </tr>
                </thead>
                <tbody>
                    {transactions.map((t)=>(
                        <tr key={t.id} style={{color:t.transaction_type==='credit' ? "green" :"red"}}>
                            <td>{new Date(t.created_at).toLocaleDateString()}</td>
                            <td>{t.transaction_type}</td>
                            <td>{t.amount}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>

    )
    
    
}
export default Statement;