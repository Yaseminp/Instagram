const express = require('express');
const mongoose = require ('mongoose');
const app = express();

//Db config
const db = require('./config/keys').mongoURI;
//connect to mongodb
mongoose
.connect(db)
.then(() => console.log ('Mongodb connected'))
.catch(err => console.log(err));

//First Route
app.get('/',(req,res) => res.send('hello'));
const port = 7200;
app.listen(port, () => console.log(`Server running on port ${port}`));

