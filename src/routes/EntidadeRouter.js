const BaseRouter = require('./BaseRouter');
const Consts = require('../../Consts');
const EntidadeController = require('../controller/EntidadeController');

class EntidadeRouter extends BaseRouter {
    constructor(api) {
        super(api);

        this.entidadeController = new EntidadeController();
    }

    configureRoutes() {
        this.addRoute(
            Consts.REQUEST.METHODS.GET,
            '/api',
            this.home.bind(this)
        );

        this.addRoute(
            Consts.REQUEST.METHODS.POST,
            '/registrar/',
            this.save.bind(this)
        );

        this.addRoute(
            Consts.REQUEST.METHODS.POST,
            '/autenticar/',
            this.autenticar.bind(this)
        );

        this.addRoute(
            Consts.REQUEST.METHODS.POST,
            '/entidade/',
            this.save.bind(this)
        );

        this.addRoute(
            Consts.REQUEST.METHODS.GET,
            '/entidade/',
            this.getAll.bind(this)
        );

        this.addRoute(
            Consts.REQUEST.METHODS.GET,
            '/entidade/:id',
            this.getById.bind(this)
        );

        this.addRoute(
            Consts.REQUEST.METHODS.DELETE,
            '/entidade/:id',
            this.delete.bind(this)
        );

        this.addRoute(
            Consts.REQUEST.METHODS.PUT,
            '/entidade/:id',
            this.update.bind(this)
        );
    }

    async home(req, res, next) {
        const app = { app: 'api_doacao', versao: '1.0' };
        try {
            return this.send(app, res, Consts.REQUEST.HTTP.OK, null);
        } catch (error) {
            return this.send(error.message, res,  Consts.REQUEST.HTTP.BAD_REQUEST)
        }
    }

    async save(req, res, next) {
        try {
            const entidade = await this.entidadeController.createEntidade(req);
            return this.send(entidade, res, Consts.REQUEST.HTTP.OK, null);
        } catch (error) {
            return this.send(error.message, res,  Consts.REQUEST.HTTP.BAD_REQUEST)

        }
    }

    async getAll(req, res, next) {
        try {
            const entidadeAll = await this.entidadeController.getAllEntidade();
            return this.send(entidadeAll, res, Consts.REQUEST.HTTP.OK, null);
        } catch (error) {
            res.send(error)
        }
    }

    async getById(req, res, next) {
        try {
            const entidadeAll = await this.entidadeController.getById(req);
            return this.send(entidadeAll, res, Consts.REQUEST.HTTP.OK, null);
        } catch (error) {
            res.send(error)
        }
    }

    async delete(req, res, next) {
        try {
            const entidadeAll = await this.entidadeController.delete(req);
            return this.send(entidadeAll, res, Consts.REQUEST.HTTP.OK, null);
        } catch (error) {
            res.send(error)
        }
    }


    async update(req, res, next) {
        try {
            const entidadeAll = await this.entidadeController.update(req);
            return this.send(entidadeAll, res, Consts.REQUEST.HTTP.OK, null);
        } catch (error) {
            res.send(error)
        }
    }

    async autenticar(req, res, next) {
        try {
            const entidade = await this.entidadeController.autenticar(req);
            console.log(entidade)
            return this.send(entidade, res, Consts.REQUEST.HTTP.OK, null);
        } catch (error) {
            return this.send(error.message, res,  Consts.REQUEST.HTTP.UNAUTHORIZED)
        }
    }

}

module.exports = EntidadeRouter;