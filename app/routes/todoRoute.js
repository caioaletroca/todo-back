"use strict";

module.exports = function (app) {
    let { isAuthorized } = app.middlewares.authMiddleware;
    let { exists } = app.middlewares.existsMiddleware;

    app.providers.serviceProvider((app, route) => {
        route.get('/users/:user/todos', [ isAuthorized, exists("user") ], 'todoController@index');
    });

    app.providers.serviceProvider((app, route) => {
        route.post('/users/:user/todos', [ isAuthorized, exists("user") ], 'todoController@create');
    });

    app.providers.serviceProvider((app, route) => {
        route.put('/todos/:todo', [ isAuthorized, exists("todo") ], 'todoController@update');
    });

    app.providers.serviceProvider((app, route) => {
        route.delete('/todos/:todo', [ isAuthorized, exists("todo") ], 'todoController@delete');
    });
}