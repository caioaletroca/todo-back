"use strict";

/**
 * Loads env configuration for local application
 * Inserts a import of this file before any other application imports
 */

const path = require("path");
const parseArgs = require("minimist");
const dotenv = require("dotenv");

// Get parameters
const { env } = parseArgs(process.argv.slice(2));

// Load configuration
dotenv.config({
  path: path.resolve(process.cwd(), `.env${env ? `.${env}` : ""}`),
});

module.exports = {};