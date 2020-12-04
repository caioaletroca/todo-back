module.exports = function (app) {
    this.app = app;
    const Controller = this.app.controllers.controller;

    /**
     * Instantiates the controller
     * @param {string} controller 
     */
    this.createController = function (controller) {
        // Parse params
        const params = controller.split('@');

        // Gets the target controller instance
        const instance = this.app.controllers[params[0]];

        // Wraps the controller on a base action method
        return async (req, res) =>
            await Controller.action(req, res, instance[params[1]]);
    }

    /**
     * Parses the HTTP methods
     * @param {string} method 
     * @param {string} path 
     * @param {array} mids 
     * @param {string} params 
     */
    this.parseMethod = function (method, path, mids, ctlr) {
        // Instantiate controller
        const controller = this.createController(ctlr);

        // Register path
        this.app[method](path, mids, controller);

        return this;
    }

    /**
     * Create all methods for all verbs
     * @param  {...any} params 
     */
    this.get = (...params) => this.parseMethod('get', ...params);
    this.post = (...params) => this.parseMethod('post', ...params);
    this.put = (...params) => this.parseMethod('put', ...params);
    this.patch = (...params) => this.parseMethod('patch', ...params);
    this.delete = (...params) => this.parseMethod('delete', ...params);

    /**
     * Returns a callable action
     */
    return (action) => action(this.app, this);
}