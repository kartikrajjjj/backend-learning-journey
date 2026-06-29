const express= require('express');

const app=express();

app.use("/",(req,res,next)=>{
    console.log('FROM FIRST MIDDLEWARE');
    next();
})
app.use("/submit",(req,res,next)=>{
    console.log('FROM SECOND MIDDLEWARE');
    res.send("<p>RESPONSE FROM '/submit' </p>");
})
app.use((req,res,next)=>{
    console.log('FROM THIRD MIDDLEWARE');
    res.send("<p>RESPONSE FROM '/'.<br> CHECK TERMINAL CONSOLE</p>");
})

const PORT=3001;
app.listen(3001,()=>{
    console.log(`Server running on address http://localhost:${PORT}`);
})
