const mongoose = require('mongoose');
const env = require('../config/env');

mongoose.connect(env.mongo.url, {useNewUrlParser: true});
mongoose.Promise = global.Promise;
mongoose.set('useCreateIndex', true);

const db = mongoose.connection;

module.exports = db;