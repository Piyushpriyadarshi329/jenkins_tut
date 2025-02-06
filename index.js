const express=require("express");
const app= express();


app.get("/",(req,res)=>{
    try {
        req.send(200,{success:true,message:"this is Home page"})

        
    } catch (error) {
        req.send(500,{success:false})
        
    }
})







app.listen(5001,()=>{
    console.log("server is listen on 5001 port")
})