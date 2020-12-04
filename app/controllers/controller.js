"use strict";

const Response = require('../utils');

module.exports = app => {
    this.action = async (req, res, action) => {
        try {
            return await action(req, res, new Response());
        } catch (e) {

        }
    }
    
    return this;
}