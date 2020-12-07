"use strict";

const Knex = require("knex");
const { Model } = require("objection");

let connection = {
  host: process.env.DATABASE_HOST,
  database: process.env.DATABASE_NAME,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  typeCast: function (field, next) {
    if (field.type == "TINY" && field.length == 1) {
      let value = field.string();
      return value ? value == "1" : null;
    }
    return next();
  },
};

// Starts knex
const knex = Knex({
  client: "mysql",
  version: "5.6",
  connection,
  pool: {
    min: 2,
    max: 10,
  },
});

// Bind knex to objection
Model.knex(knex);

// Export the knex variable
module.exports = knex;