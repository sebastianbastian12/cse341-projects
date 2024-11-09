const express = require('express');
const mongodb = require('./data/database');
const app = express()

app.get('/', (req, res) => 
{
    res.send("Hello World from a web server!");
});

const port = process.env.PORT || 3000;

app.use('/', require('./Week1/Week Assigment/routes'));


mongodb.initDb((err) => 
{
    if(err)
    {
        console.log(err);
    }
    else
    {
        app.listen(port, () => {console.log(`Data base and web server is listening at port ${port}`)});
    }
});

