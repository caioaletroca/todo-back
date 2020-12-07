"use strict";

const hashHelper = require('../helpers/hashHelper');
const jwtHelper = require('../helpers/jwtHelper');
const User = require('../models/User');

module.exports = {
    async register (req, res, apiResponse) {
        const user = await User.query().insert(req.body)
        apiResponse.setData(user).send(res);
    },

    async login(req, res, apiResponse) {
        if (!req.body) throw new Error('Invalid body');
        
        // Check if user exists
        const user = (await User.query().where('login', req.body.login))[0];
        if(!user) throw new Error('Invalid credentials');

        // Check password
        if (!(await hashHelper.checkPassword(req.body.password, user.password)))
            throw new Error('Invalid credentials');

        // Create a access token for the user
        const token = jwtHelper.generateJWT({
            login: req.body.login,
            name: user.name
        });

        // Save the token to the user table
        await user.$query().patch({ token });

        apiResponse.setData({ access_token: token }).send(res);
    },

    async getAuth(req, res, apiResponse) {
        apiResponse.setData(req.auth).send(res);
    },

    async update(req, res, apiResponse) {
        const user = await req.auth.$query().patchAndFetch(req.body);
        apiResponse.setData(user).send(res);
    }
}