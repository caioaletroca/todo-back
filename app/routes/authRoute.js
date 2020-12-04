"use strict";

module.exports = function (app) {
    app.providers.serviceProvider((app, route) => {
        route.post('/login', [], 'authController@register');
    }); 
}