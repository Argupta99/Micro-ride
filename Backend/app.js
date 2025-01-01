const dotenv = require('dotenv');
dotenv.config();
const cors = require('cors');
const express = require('express');
const app = express();
const connectToDb = require('./db/db');
connectToDb();

app.use(cors());

//testing purpose route to check whether the set up is complete or not

app.get('/', (req, res) => {
    res.send('Hello World');
});

module.exports = app;