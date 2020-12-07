"use strict";

const { Model } = require('objection');

class BaseModel extends Model {
    constructor() {
        super();
    
        this.$secureFields = [];
    }

    /**
     * Configures the base path for the models
     * @return {[type]} [description]
     */
    static get modelPaths() {
        return [__dirname];
    }

    // Omit stuff when creating json response from model
    $formatJson(json, options) {
        json = super.$formatJson(json, options);
        for (var key in this.$secureFields) delete json[this.$secureFields[key]];
        return json;
    }

    /**
     * Gets all records from a table
     * @return {[type]} [description]
     */
    static all() {
        return super.query().select("*");
    }
}

module.exports = BaseModel;