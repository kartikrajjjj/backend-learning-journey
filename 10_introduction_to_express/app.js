
const express = require('express');

const app=express();
app.use((req,res,next)=>{
    console.log("first middleware:", req.url);
    next();
})
app.use((req,res,next)=>{
    console.log("second middleware:", req.url);
    res.send("<p>RESPONSE FROM SERVER</p>");
    next();
})


const PORT=3001;
app.listen(PORT , ()=>{
    console.log(`Server running on address http://localhost:${PORT}`);
});
