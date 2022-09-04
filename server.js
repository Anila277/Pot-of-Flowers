// DEPENDENCIES
const express = require('express');
const mongosse = require('mongoose');
const methodOverride = require('method-override');
const expressSession = require('express-session');
const { default: mongoose } = require('mongoose');

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

// BODY PARSER MIDDLEWARE
app.use(express.urlencoded({ extended: false }));


// SESSION MIDDLEWARE

// AUTHORIZATION MIDDLEWARE

// HOMEPAGE ROUTE
app.get('/', (req, res) => {
    res.render('index.ejs');
});

// TELL THE APP TO LISTEN


