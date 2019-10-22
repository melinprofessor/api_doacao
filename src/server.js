const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const env = require('./config/env')

const BaseRouter = require('./routes/BaseRouter');
const DoacaoRouter = require('./routes/DoacaoRouter');
const EntidadeRouter = require('./routes/EntidadeRouter');
const MercadoriaRouter = require('./routes/MercadoriaRouter');

class Server {
    constructor() {
        this.api = express();
        this.started = false;
        this.api.use(cors());
        this.api.use(bodyParser.json());
        this.addAllRouters(DoacaoRouter);
        this.addAllRouters(EntidadeRouter);
        this.addAllRouters(MercadoriaRouter);

    }

    addAllRouters(routerClass) {

        const handler = new (Function.prototype.bind.apply(routerClass, [null, this.api]));

        if(handler instanceof BaseRouter) {
            handler.configureRoutes();
        }
    }

    start() {
        if(this.started) {
            return Promise.resolve();
        }

        this.started = true;
        const promisor = {
            finish: () => {
                this.api.listen(env.port, ()=> {console.log("SERVIDOR ON")})
            }
        }

        promisor.finish();
    }
}

module.exports = Server;