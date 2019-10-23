const HTTP_CODES = {
    OK: 200,
    CREATED: 201,
    ACCEPTED: 202,
    PARTIAL_CONTENT: 206,
    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    FORBIDDEN: 403,
    NOT_FOUND: 404,
    PRECONDITION_FAILED: 412,
    SERVER_ERROR: 500
};

const HTTP_METHODS = {
    GET: 'get',
    POST: 'post',
    PUT: 'put',
    DELETE: 'delete'
};

const Const = {
    DATABASE: {
        MONGODB: {
            URL: 'mongodb://localhost/combustivel'
        }
    },
    REQUEST: {
        METHODS: HTTP_METHODS,
        HTTP: HTTP_CODES
    }
}

module.exports = Const;