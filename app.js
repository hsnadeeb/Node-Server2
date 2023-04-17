// const http = require('http');
// const routes= require('./routes')
const express = require('express');
const bodyParser=require('body-parser');
const app=express();

app.use(bodyParser.urlencoded({extended:false}));

// app.use('/',(req,res,next)=>{

//     console.log("This always runs");
//     next();
// });

app.use('/add-product',(req,res,next)=>{

    // console.log("in the next middelware");
    res.send('<form action="/product" method="POST"><input type="text" name="title"><input type="number" name="size"><button type="submit">Add Product</button></form>')
});
 app.post('/product',(req,res,next)=>{
    console.log(req.body);
    res.redirect('/');

 })

app.use('/',(req,res,next)=>{

    // console.log("in the next middelware");
    res.send('<h1>Middleware Page</h1>')
});

// const server = http.createServer(app);
// server.listen(3000);

app.listen(3000);
