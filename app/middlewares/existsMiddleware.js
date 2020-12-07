const { camelCase } = require('change-case');
const { Response } = require('../utils');

/**
 * Check if the current accessed data exists in the storage
 * @param  {[type]}   req  [description]
 * @param  {[type]}   res  [description]
 * @param  {Function} next [description]
 * @return {[type]}        [description]
 */
module.exports.exists = function (...params) {
  return async function (req, res, next) {
    try {
      for (let param of params) {
        // Check for alias
        const alias = param.substring(
          param.indexOf("(") + 1,
          param.indexOf(")")
        );
        if (alias) param = param.substring(0, param.indexOf("("));
        
        // Get model
        const model = require(`../models/${camelCase(param)}`);

        // Get the data
        let entity = await model.query().findById(req.params[param]);
        if (entity === undefined)
          throw new Error("Resource does not exists");

        // Saves in the request
        req[alias ? alias : camelCase(param)] = entity;
      }
    } catch (e) {
      return new Response().setCode(404).setMessage(e.message).send(res);
    }

    return next();
  };
};