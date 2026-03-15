import supabase from "../config/supabaseClient.js";
export const getBalance=async (req,res)=>{
    const {data}=await supabase
    .from("userrrs")
    .select("balance")
    .eq("id",req.user.id)
    .single()
};
export const getStatement=async(req,res)=>{
    const {data}=await supabase
    .from("transactions")
    .select("*")
    .or(`sender_id.eq.${req.user.id},receiver_id.eq.${req.user.id}`)
    .order("created_at",{ascending:false})
    res.json(data)

}
export const transfer=async(req,res)=>{
    const {receiverEmail,amount}=req.body;
    const {data:sender}=await supabase
    .from("userrrs")
    .select("*")
    .eq("id",req.user.id)
    .single();
    if(sender.balance<amount){
        return res.status(400).json(
            {
                message:"insufficient balance"
            }
        )
    }
    const {data:receiver}=await supabase
    .from("userrrs")
    .select("*")
    .eq("email",receiverEmail)
    .single();
    if(!receiver){
        return res.status(400).json({
            message:"receiver noot found"
        })
    }
    await supabase 
    .from("userrrs")
    .update({balance:sender.balance-amount})
    .eq("id",sender.id);
    await supabase
    .from("userrrs")
    .update({balance:receiver.balance+amount})
    .eq("id",receiver.id)
    await supabase.from("transactions").insert(
        [{
            sender_id:sender.id,
            receiver_id:receiver.id,
            amount,
            transaction_type:"debit"
        },
    {sender_id:sender.id,
        receiver_id:receiver.id,amount,transaction_type:"credit"
    }]
    );
    res.json({
        message:"Trandfer successful"
    })
}