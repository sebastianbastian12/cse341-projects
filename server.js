const express = require('express');
const mongodb = require('./data/database');
const bodyParser = require('body-parser');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World from a web server!');
});

const port = process.env.PORT || 3000;
app.use(bodyParser.json());
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Acces-Control-Allow-Headers',
    'Origin, X-Requested-with, Content-Type, Accept, Z-key'
  );
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PUT, DELETE, OPTIONS'
  );
  next();
});
app.use('/', require('./Week1/Assignment Week1&2/routes'));

mongodb.initDb((err) => {
  if (err) {
    console.log(err);
  } else {
    app.listen(port, () => {
      console.log(`Data base and web server is listening at port ${port}`);
    });
  }
});
