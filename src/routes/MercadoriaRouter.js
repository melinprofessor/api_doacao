const BaseRouter = require('./BaseRouter');
const Consts = require('../../Consts');
const MercadoriaController = require('../controller/MercadoriaController');

class MercadoriaRouter extends BaseRouter {
    constructor(api) {
        super(api);

        this.mercadoriaController = new MercadoriaController();
    }

    configureRoutes() {
        this.addRoute(
            Consts.REQUEST.METHODS.GET,
            '/api',
            this.home.bind(this)
        );

        this.addRoute(
            Consts.REQUEST.METHODS.POST,
            '/mercadoria/',
            this.save.bind(this)
        );

        this.addRoute(
            Consts.REQUEST.METHODS.GET,
            '/mercadoria/',
            this.getAll.bind(this)
        );

        this.addRoute(
            Consts.REQUEST.METHODS.GET,
            '/mercadoria/:id',
            this.getById.bind(this)
        );

        this.addRoute(
            Consts.REQUEST.METHODS.DELETE,
            '/mercadoria/:id',
            this.delete.bind(this)
        );

        this.addRoute(
            Consts.REQUEST.METHODS.PUT,
            '/mercadoria/:id',
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
            const mercadoria = await this.mercadoriaController.createMercadoria(req);
            return this.send(mercadoria, res, Const.REQUEST.HTTP.OK, null);
        } catch (error) {
            res.send(error);
        }
    }

    async getAll(req, res, next) {
        try {
            const mercadoriaAll = await this.mercadoriaController.getAllMercadoria();
            return this.send(mercadoriaAll, res, Consts.REQUEST.HTTP.OK, null);
        } catch (error) {
            res.send(error)
        }
    }

    async getById(req, res, next) {
        try {
            const mercadoriaAll = await this.mercadoriaController.getById(req);
            return this.send(mercadoriaAll, res, Consts.REQUEST.HTTP.OK, null);
        } catch (error) {
            res.send(error)
        }
    }

    async delete(req, res, next) {
        try {
            const mercadoriaAll = await this.mercadoriaController.delete(req);
            return this.send(mercadoriaAll, res, Consts.REQUEST.HTTP.OK, null);
        } catch (error) {
            res.send(error)
        }
    }


    async update(req, res, next) {
        try {
            const mercadoriaAll = await this.mercadoriaController.update(req);
            return this.send(mercadoriaAll, res, Consts.REQUEST.HTTP.OK, null);
        } catch (error) {
            res.send(error)
        }
    }

}

module.exports = MercadoriaRouter;