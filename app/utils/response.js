"use strict";

// const { HttpCodes } = require("moria-errors");

/**
 * The response object handler for the application
 * @param {HttpCode} code 
 * @param {String} message 
 * @param {Object} data 
 */
function Response(code = 200, message = "Operation successful", data) {
    this.ok = true;
    this.code = code;
    this.message = message;
    this.data = data;
    return this;
}

Response.prototype.setCode = function (code) {
    this.code = code;
    return this;
}

Response.prototype.setMessage = function (message) {
    this.message = message;
    return this;
}

Response.prototype.setData = function (data) {
    this.data = data;
    return this;
}

Response.prototype.send = function () {
    return JSON.stringify({
        ok: this.ok,
        code: this.code,
        message: this.message,
        data: this.data
    })
}

module.exports = Response;