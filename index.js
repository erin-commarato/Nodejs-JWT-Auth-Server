// Main starting point of the application
const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');
// create instance of express, will be our app
const app = express();
const router = require('./router');
const cors = require('cors');

// Connect to mongoDB/DB setup
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:auth/auth')

// App setup
// get express working the way we want
// tell app to use morgan
app.use(morgan('combined'));
app.use(cors());
app.use(bodyParser.json({ type: '*/*' }));
router(app);

// Server setup
// get express talking to outside world
// if there is a port defined already, use that, otherwise use 3090
const port = process.env.PORT || 3090;

// createServer = native node library for working with http requests that are incoming
// forward any http requests on to app
const server = http.createServer(app);
server.listen(port);
console.log('Server listening on: ', port);
