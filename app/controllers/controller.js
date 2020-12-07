"use strict";

const { Response } = require('../utils');

module.exports = function(app) {
    /**
     * Wraps all controller calls with JS error handling
     * @param {*} req
     * @param {*} res
     * @param {*} action
     */
    this.action = async function (req, res, action) {
        try {
            await action(req, res, new Response());
        } catch (e) {
            console.error(e);
            return new Response().setCode(400).setMessage(e.message).send(res);
        }
    }
    
    return this;
}