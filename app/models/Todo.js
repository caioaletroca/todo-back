"use strict";

const BaseModel = require('./BaseModel');

class Todo extends BaseModel {
    // Table name is the only required property.
    static get tableName() {
        return "todos";
    }

    // Optional JSON schema. This is not the database schema!
    // No tables or columns are generated based on this. This is only
    // used for input validation. Whenever a model instance is created
    // either explicitly or implicitly it is checked against this schema.
    // See http://json-schema.org/ for more info.
    static get jsonSchema() {
        return {
            type: "object",
            required: ["name", "login", "password"],

            properties: {
                id: { type: "integer" },
                name: { type: "string", maxLength: 100 },
                login: { type: "string", maxLength: 50 },
                password: {
                    type: "string",
                    minLength: 8,
                    maxLength: 50,
                    pattern: "^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])[\\s\\S\\d]*$"
                },
                token: { type: "string" },

                // Timestamps
                created_at: { type: "date" },
                updated_at: { type: "date" }
            }
        };
    }

    static get relationMappings() {
        return {
            user: {
                relation: Model.HasOneRelation,
                modelClass: "./User",
                join: {
                    from: "todos.user_id",
                    to: "users.id"
                }
            },
        };
    }
}

module.exports = Todo;