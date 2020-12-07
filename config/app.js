'use strict';

const express = require('express');
const cors = require('cors')
const dotenv = require('dotenv');
const consign = require('consign');
require('../app/helpers/envHelper');
require('../app/helpers/dbHelper');

// Instantiate server
const app = express();
dotenv.config();

// Configure parsers
app.use(express.json());
app.use(cors());

// Load middlewares
consign({
    verbose: true,
    cwd: 'app'
})
.then("controllers")
.then("middlewares")
.then("helpers")
.then("providers")
.include("routes")
.into(app)

app.listen(process.env.PORT, function () {
    console.log("ToDo running at " + process.env.PORT)
});