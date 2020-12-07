const bcrypt = require("bcryptjs");
const saltRounds = 10;

module.exports = {
  /**
   * Hashes a play password using the Bcrypt
   * @param  {[type]} plainText [description]
   * @return {[type]}           [description]
   */
  hash(plainText) {
    return new Promise((resolve, reject) => {
      bcrypt.hash(plainText, saltRounds, (err, hash) => {
        if (err) reject(err);

        resolve(hash);
      });
    });
  },

  async checkPassword(plainPassword, hashPassword) {
    return await bcrypt.compare(plainPassword, hashPassword);
  },
};
