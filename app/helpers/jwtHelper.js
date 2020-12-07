var jwt = require("jsonwebtoken");

const jwtConfig = require("../../config/jwt");

/**
 * Generates a new token using the User's credentials
 * @param  {[type]} credentials [description]
 * @return {[type]}             [description]
 */
function generateJWT(data) {
  try {
    return jwt.sign(data, jwtConfig.secret, {
      expiresIn: jwtConfig.expires,
    });
  } catch (error) {
    return ex.message;
  }
}

function verify(token) {
  try {
    return jwt.verify(token, jwtConfig.secret);
  } catch (error) {
    return ex.message;
  }
}

module.exports = {
  generateJWT,
  verify,
};