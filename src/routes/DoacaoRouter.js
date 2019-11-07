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

		this.addRoute(
			Consts.REQUEST.METHODS.GET,
			'/doacaoByIdReceptora/:id',
			this.doacaoByIdReceptora.bind(this)
		);

		this.addRoute(
			Consts.REQUEST.METHODS.GET,
			'/doacaoByIdDoadora/:id',
			this.doacaoByIdReceptora.bind(this)
		);
	}

	async home(req, res, next) {
		const app = { app: 'api_doacao', versao: '1.0' };
		try {
			return this.send(app, res, Consts.REQUEST.HTTP.BAD_REQUEST, null);
		} catch (error) {
			return this.send(error.message, res, Consts.REQUEST.HTTP.BAD_REQUEST, null);
		}
	}

	async save(req, res, next) {
		try {
			const doacao = await this.doacaoController.createDoacao(req);
			return this.send(doacao, res, Consts.REQUEST.HTTP.OK, null);
		} catch (error) {
			return this.send(error.message, res, Consts.REQUEST.HTTP.BAD_REQUEST, null);
		}
	}

	async getAll(req, res, next) {
		try {
			const doacaoAll = await this.doacaoController.getAllDoacao();
			return this.send(doacaoAll, res, Consts.REQUEST.HTTP.OK, null);
		} catch (error) {
			return this.send(error.message, res, Consts.REQUEST.HTTP.BAD_REQUEST, null);
		}
	}

	async getById(req, res, next) {
		try {
			const doacaoAll = await this.doacaoController.getById(req);
			return this.send(doacaoAll, res, Consts.REQUEST.HTTP.OK, null);
		} catch (error) {
			return this.send(error.message, res, Consts.REQUEST.HTTP.BAD_REQUEST, null);
		}
	}

	async doacaoByIdReceptora(req, res, next) {
		try {
			const doacaoAll = await this.doacaoController.doacaoByIdReceptora(req);
			return this.send(doacaoAll, res, Consts.REQUEST.HTTP.OK, null);
		} catch (error) {
			return this.send(error.message, res, Consts.REQUEST.HTTP.BAD_REQUEST, null);
		}
	}

	async doacaoByIdDoadora(req, res, next) {
		try {
			const doacaoAll = await this.doacaoController.doacaoByIdDoadora(req);
			return this.send(doacaoAll, res, Consts.REQUEST.HTTP.OK, null);
		} catch (error) {
			return this.send(error.message, res, Consts.REQUEST.HTTP.BAD_REQUEST, null);
		}
	}

	async delete(req, res, next) {
		try {
			const doacaoAll = await this.doacaoController.delete(req);
			return this.send(doacaoAll, res, Consts.REQUEST.HTTP.OK, null);
		} catch (error) {
			return this.send(error.message, res, Consts.REQUEST.HTTP.BAD_REQUEST, null);
		}
	}


	async update(req, res, next) {
		try {
			const doacaoAll = await this.doacaoController.update(req);
			return this.send(doacaoAll, res, Consts.REQUEST.HTTP.OK, null);
		} catch (error) {
			return this.send(error.message, res, Consts.REQUEST.HTTP.BAD_REQUEST, null);
		}
	}

	async autenticar(req, res, next) {
		try {
			const usuario = await this.doacaoController.autenticar(req);
			return this.send(usuario, res, Consts.REQUEST.HTTP.OK, null);
		} catch (error) {
			return this.send(error.message, res, Consts.REQUEST.HTTP.BAD_REQUEST, null);
		}
	}

}

module.exports = DoacaoRouter;