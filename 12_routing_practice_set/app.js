const express = require('express');

const app=express();

app.use((req,res,next)=>{
    console.log('First dummy middleware', req.url , req.method);
    next();
})

app.use((req,res,next)=>{
    console.log('Second dummy middleware', req.url , req.method);
    next();
})

// app.use((req,res,next)=>{
//     console.log('Third middleware', req.url , req.method);
//     res.send('<p>RESPONSE SENT.</p>');
// })

app.get("/",(req,res,next)=>{
    res.send('WELCOME TO HOME');
})

app.get("/contact",(req,res,next)=>{
    res.send(`
        <h2>Please enter your details:</h2>
        <form action="/contact" method="POST" >
        <input type="text" name="name" placeholder="Enter your name"></input>
        <input type="email" name="email" placeholder="Enter your E-mai ID"></input>
        <input type="submit"/>
        </form>
        
    `);
})

app.post("/contact",(req,res,next)=>{
    console.log('Handling /contact for POST', req.url, req.method);
    res.send('<p>We will contact you shortly</p>');
})

const PORT=3001;
app.listen(3001,()=>{
    console.log(`Server running on address http://localhost:${PORT}`);
})