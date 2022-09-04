// DEPENDENCIES
const express = require('express');
const mongosse = require('mongoose');
const methodOverride = require('method-override');
const expressSession = require('express-session');

// INITIALIZE THE APP
const app = express();

// CONFIGURE SETTINGS
require('dotenv').config();

const PORT = process.env.PORT;
const DATABASE_URI = process.env.DATABASE_URI;
const db = mongoose.connections; // what is this?

// CONNECT TO MONGODB

// ADD MONGO DB CONNECTED AND ERROR EVENT LISTENERS

// MOUNT MIDDLEWARE

// BODY PARSER MIDDLEWARE

// SESSION MIDDLEWARE

// AUTHORIZATION MIDDLEWARE

// HOMEPAGE ROUTE

// TELL THE APP TO LISTEN


