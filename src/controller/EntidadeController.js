const Entidade = require('../model/Entidade');
const EntidadeRepository = require('../repository/EntidadeRepository');
class EntidadeController {
    constructor() {
        this.entidadeRepository = new EntidadeRepository();
    }

    async createEntidade(request) {
        try {
            const { body } = request;
            const entidade = new Entidade(body);
            const entidadeCurrent = await this.entidadeRepository.save(entidade);

            return entidadeCurrent;
        } catch (error) {
            throw error;
        }
    }

    async getAllEntidade() {
        try {
            const entidadeAll = await this.entidadeRepository.getAll();
            return entidadeAll;
        } catch (error) {
            throw error;
        }
    }

    async getById(req) {
        try {
            const { params } = req;
            const entidade = await this.entidadeRepository.getById(params.id);
            return entidade;
        } catch (error) {
            throw error;
        }
    }

    async delete(req) {
        const { params } = req;
        const entidade = await this.entidadeRepository.delete(params.id);
        return entidade;
    }

    async update(req) {
        try {
            const { params, body } = req;
            const entidade = await this.entidadeRepository.update(params.id, body);
            return entidade;
        } catch (error) {
            throw error;
        }
    }

    async getEntidadeByEntidadeStationId(req) {
        try {
            const { params } = req;
            const entidade = await this.entidadeRepository.getEntidadeByEntidadeStationId(params.id);
            return entidade;
        } catch (error) {
            throw error
        }
    }

    async autenticar(req) {
        try {
            const { params, body } = req;

            const entidade = await this.entidadeRepository.autenticar(body.email, body.password);
            return entidade;
        } catch (error) {

            throw error
        }
    }


}

module.exports = EntidadeController;