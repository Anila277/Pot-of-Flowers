// DEPENDENCIES
const express = require('express');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const expressSession = require('express-session');
const flowersRouter = require('./controllers/flowers');

// INITIALIZE THE APP
const app = express();

// CONFIGURE SETTINGS
require('dotenv').config();

const PORT = process.env.PORT;
const DATABASE_URI = process.env.DATABASE_URI;
const db = mongoose.connections; // what is this?

// CONNECT TO MONGODB
mongoose.connect(DATABASE_URI);
  //add mongoDB connected and error event listeners
  db.concat('connected', () => console.log('Connect to MongoDB'));
  db.concat('error', (err) => console.log('MongoDB Error: ' + err.message));

// MOUNT MIDDLEWARE
// app.use(express.static('public'))

// BODY PARSER MIDDLEWARE
app.use(express.urlencoded({ extended: false }));
app.use('/public', express.static('public'));
app.use(methodOverride('_method'));


// SESSION MIDDLEWARE


// AUTHORIZATION MIDDLEWARE


// HOMEPAGE ROUTE
app.get('/', (req, res) => {
    res.render('index.ejs');
});


app.use('/flowers', flowersRouter)

// TELL THE APP TO LISTEN
app.listen(PORT, () => {
    console.log(`Express is listening on port ${PORT}`)
});

