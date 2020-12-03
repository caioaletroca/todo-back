'use strict';

const express = require('express');
const cors = require('cors')
const dotenv = require('dotenv');
const consign = require('consign');

// Instantiate server
const app = express();
dotenv.config();

// Configure parsers
app.use(express.json());
app.use(cors());

// Load middlewares
consign({
	verbose: true,
})
// .then("app/controllers")
// .then("app/middlewares")
// .then("app/helpers")
.then("app/routes")
.into(app)

app.listen(process.env.PORT, function () {
    console.log("ToDo running at " + process.env.PORT)
});