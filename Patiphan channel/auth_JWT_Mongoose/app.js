require('dotenv').config();
require('./config/database').connect();

const express = require('express');
const userRouters = require('./route/user');

const app = express();

app.use(express.json());

app.use('/users', userRouters);

module.exports = app;
