"use strict";

const Todo = require('../models/Todo');

module.exports = {
    async index (req, res, apiResponse) {
        const todos = await Todo.query().where("user_id", req.user.id);
        apiResponse.setData(todos).send(res);
    },

    async create (req, res, apiResponse) {
        const todo = await Todo.query().insert({
            user_id: req.user.id,
            ...req.body
        });
        apiResponse.setData(todo).send(res);
    },

    async update (req, res, apiResponse) {
        const todo = await Todo.query().patchAndFetchById(req.todo.id, req.body);
        apiResponse.setData(todo).send(res);
    },

    async delete (req, res, apiResponse) {
        await req.todo.$query().delete();
        apiResponse.send(res);
    },
}