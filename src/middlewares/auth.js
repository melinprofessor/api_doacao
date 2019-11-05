const jwt = require('jsonwebtoken');
const {promisify} = require('util');

const auth = async(req, res, next) => {
    
    const {authorization} = req.headers;

    if(req.path === '/registrar' || req.path === '/autenticar' || req.path === '/api') {
        console.log(req.path)
        return next();
    }

    if(!authorization) {
        return res.status(401).send({ error: 'No token provided'});
    }



    const  token = authorization.replace('Bearer ', '')

    try {
        const decoded = await promisify(jwt.verify)(token, "secret");
        req.userId = decoded.id;

        return next();
    } catch (error) {
        return res.status(401).send({ error: "Token invalid" });
    }
}

module.exports = auth;