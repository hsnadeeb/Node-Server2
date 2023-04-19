const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const adminRoutes = require('./routes/login');
const chatRoutes = require('./routes/chat');

app.use(bodyParser.urlencoded({ extended: false }));




app.use(adminRoutes);
app.use(chatRoutes);

app.use((req, res, next) => {
  res.status(404).send('<h1>Page not found</h1>');
});

app.listen(3000);
