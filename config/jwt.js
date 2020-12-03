/**
 * Defines the settings for the JWT module
 * @type {Object}
 */
module.exports = {

	/**
	 * Secret for jwt generation
	 * @type {[type]}
	 */
	secret: process.env.JWT_TOKEN_SECRET || '1234567890ABCDEFGHIJKLMNOPQRSTUVXWYZ',

	/**
	 * (Time To Live) The expiration time for the token
	 * @type {[type]}
	 */
	expires: process.env.JWT_TTL || '30m',
}