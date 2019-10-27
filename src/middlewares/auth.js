const jwt = require('jsonwebtoken');
const {promisify} = require('util');

const auth = async(req, res, next) => {
    const authHeader = req.headers.autorization;

    if(req.path === '/registrar' || req.path === '/autenticar' || req.path === '/api') {
        console.log(req.path)
        return next();
    }

    if(!authHeader) {
        return res.status(401).send({ error: 'No token provided'});
    }



    const [schema, token] = authHeader.split(" ");
    try {
        const decoded = await promisify(jwt.verify)(token, "secret");
        req.userId = decoded.id;

        return next();
    } catch (error) {
        return res.status(401).send({ error: "Token invalid" });
    }
}

module.exports = auth;