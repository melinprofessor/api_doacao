const BaseRouter = require('./BaseRouter');
const Consts = require('../../Consts');
const DoacaoController = require('../controller/DoacaoController');

class DoacaoRouter extends BaseRouter {
    constructor(api) {
        super(api);

        this.doacaoController = new DoacaoController();
    }

    configureRoutes() {
        this.addRoute(
            Consts.REQUEST.METHODS.GET,
            '/api',
            this.home.bind(this)
        );

        this.addRoute(
            Consts.REQUEST.METHODS.POST,
            '/doacao/',
            this.save.bind(this)
        );

        this.addRoute(
            Consts.REQUEST.METHODS.GET,
            '/doacao/',
            this.getAll.bind(this)
        );

        this.addRoute(
            Consts.REQUEST.METHODS.GET,
            '/doacao/:id',
            this.getById.bind(this)
        );

        this.addRoute(
            Consts.REQUEST.METHODS.DELETE,
            '/doacao/:id',
            this.delete.bind(this)
        );

        this.addRoute(
            Consts.REQUEST.METHODS.PUT,
            '/doacao/:id',
            this.update.bind(this)
        );
    }

    async home(req, res, next) {
        const app = {app: 'api_doacao', versao: '1.0'};
        try {
            return this.send(app, res, Consts.REQUEST.HTTP.OK, null);
        } catch (error) {
            res.send(error)
        }
    }

    async save(req, res, next) {
        try {
            const doacao = await this.doacaoController.createDoacao(req);
            return this.send(doacao, res, Const.REQUEST.HTTP.OK, null);
        } catch (error) {
            res.send(error);
        }
    }

    async getAll(req, res, next) {
        try {
            const doacaoAll = await this.doacaoController.getAllDoacao();
            return this.send(doacaoAll, res, Consts.REQUEST.HTTP.OK, null);
        } catch (error) {
            res.send(error)
        }
    }

    async getById(req, res, next) {
        try {
            const doacaoAll = await this.doacaoController.getById(req);
            return this.send(doacaoAll, res, Consts.REQUEST.HTTP.OK, null);
        } catch (error) {
            res.send(error)
        }
    }

    async delete(req, res, next) {
        try {
            const doacaoAll = await this.doacaoController.delete(req);
            return this.send(doacaoAll, res, Consts.REQUEST.HTTP.OK, null);
        } catch (error) {
            res.send(error)
        }
    }


    async update(req, res, next) {
        try {
            const doacaoAll = await this.doacaoController.update(req);
            return this.send(doacaoAll, res, Consts.REQUEST.HTTP.OK, null);
        } catch (error) {
            res.send(error)
        }
    }

}

module.exports = DoacaoRouter;