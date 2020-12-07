"use strict";

module.exports = function (app) {
    let { isAuthorized } = app.middlewares.authMiddleware;

    app.providers.serviceProvider((app, route) => {
        route.post('/register', [], 'authController@register');
    }); 

    app.providers.serviceProvider((app, route) => {
        route.post('/login', [], 'authController@login');
    }); 

    app.providers.serviceProvider((app, route) => {
        route.get('/auth', [ isAuthorized ], 'authController@getAuth')
    });

    app.providers.serviceProvider((app, route) => {
        route.put('/auth', [ isAuthorized ], 'authController@update')
    });
}