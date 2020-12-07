const knex = require("../helpers/dbHelper");
const User = require("../models/User");
const { Response } = require('../utils');

function getToken(req) {
  if (
    req.headers.authorization &&
    req.headers.authorization.split(" ")[0] === "Bearer"
  )
    return req.headers.authorization.split(" ")[1];
  else return undefined;
}

/**
 * Checks if the user has the right token to access security data
 * @param  {[type]}   req  [description]
 * @param  {[type]}   res  [description]
 * @param  {Function} next [description]
 * @return {[type]}        [description]
 */
module.exports.isAuthorized = async function (req, res, next) {
  let token = undefined;
  let user = {};
  try {
    // Check if token is present on the header
    token = getToken(req);
    if (token === undefined)
      throw new Error("No authentication");

    // Check if user has token
    user = (await User.query().where('token', token))[0];
    if (user === undefined)
      throw new Error("No authentication");
  } catch (e) {
    // Stop routing system and answer the client
    return new Response().setCode(400).setMessage(e.message).send(res);
  }

  // Save the current user token
  req.token = token;
  req.auth = user;

  // User can access protected route
  return next();
};