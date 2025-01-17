const express = require('express');
const mongoose = require ('mongoose');
const users = require('./routes/api/users');
const profile = require('./routes/api/profile');
const posts = require('./routes/api/posts');
const bodyParser = require('body-parser');
const passport = require('passport');
const path = require('path');

const app = express();

//Body parser middleware
app.use(bodyParser.urlencoded({extended: false }));
app.use(bodyParser.json());

//Passport configuration
app.use(passport.initialize());
require('./config/passport')(passport);

//Db config
const db = require('./config/keys').mongoURI;
//connect to mongodb
mongoose
.connect(db)
.then(() => console.log ('Mongodb connected'))
.catch(err => console.log(err));

//First Route



app.use('/api/users', users);
app.use('/api/profile', profile);
app.use('/api/posts', posts);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  })
}

const port = process.env.PORT || 7200;
app.listen(port, () => console.log(`Server running on port ${port}`));
