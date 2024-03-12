const express=require('express');
const app=express();
const cors=require('cors');
app.use(cors());
app.get('/convertUsd',(req,res)=>{
    const a=parseFloat(req.query.inr);
    const result=83*a;
    res.send(result.toString());
})
app.get('/convertInr',(req,res)=>{
    const a=parseFloat(req.query.usd);
    const result=a*0.012;
    res.send(result.toString());
})
app.listen(3001);