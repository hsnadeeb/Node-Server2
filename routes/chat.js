const express = require('express');
const router = express.Router();
const fs=require('fs');
const messages = [];

router.get('/', (req, res, next) => {
    fs.readFile("messages.txt", (err,data)=>{
     if(err){
        data='No chat exist';
        console.log(err);
     }
     res.send(`${data}<br>
     <form onsubmit="document.getElementById('username').value = localStorage.getItem('username')" action="/" method="POST">
       <input id="message" type="text" placeholder="message" name="message">
       <input id="username" type="hidden" name="username">
       <button type="submit">Submit</button>
     </form>
     ${messages.map((message) => `<div>${message.username}: ${message.message}</div>`).join('')}
   `);
    })

});

router.post('/', (req, res, next) => {
  const message = {
    username: req.body.username,
    message: req.body.message,
  };
  fs.writeFile("messages.txt", `${req.body.username}: ${req.body.message} \n`,{flag: 'a'} ,(err)=>{
    err? console.log(err):res.redirect("/");
  })
  messages.push(message);
  console.log(messages);
//   res.redirect('/');
});

module.exports = router;
