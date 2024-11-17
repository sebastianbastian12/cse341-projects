const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv/config');

//Importing Routes
const postsRoute = require('./routes/posts');

//Middlewares (Functions that works from a route call/hit))
app.use(bodyParser.json());

app.use('/posts', (req, res, next) => {
  console.log('This is a middleware running from posts route!');
  next();
});

app.use('/posts', postsRoute);

//Routes
app.get('/', (req, res) => {
  res.send('Second week learning from server! (GET)');
});

//Connect to DB
mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log('Connected to DB!');
  })
  .catch((err) => {
    console.log('Failed to connec to DB:', err);
  });

const PORT = 3001;

//Listening the server
app.listen(PORT, () => {
  console.log(`Server runing at port ${PORT}`);
});
