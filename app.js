// const http = require('http');
// const routes= require('./routes')
const express = require('express');

const app=express();

app.use((req,res,next)=>{

    console.log("in the middelware");
    next();
});
app.use((req,res,next)=>{

    console.log("in the next middelware");
    res.send('<h1>Hello from second ! middleware</h1>')
});

// const server = http.createServer(app);
// server.listen(3000);

app.listen(3000);
