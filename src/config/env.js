const Const = require('../../Consts');
const env = {};

env.port = parseInt(process.env.PORT || 8000, 10)
env.mongo = {url: process.env.MONGO_URL || Const.DATABASE.MONGODB.URL}

module.exports = env;