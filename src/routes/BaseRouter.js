const Const = require('../../Consts');

class BaseRouter {
    constructor(api) {
        this.api = api;
        this.routes = [];
    }

    addRoute(method, endpoint, handler) {
        this.routes.push({
            method,
            endpoint,
            handler
        });

        // api.get('/usuario', (req, res, next))
        this.api[method](endpoint, handler);
    }

    send(data, res, code, headers = {}) {
        const response = res
        .status(code || Const.REQUEST.HTTP.OK)
        .type('application/json')
        .header(headers)
        .send(data);

        return response;
    }
}

module.exports = BaseRouter;