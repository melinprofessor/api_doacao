const Entidade = require('../model/Entidade');
const EntidadeRepository = require('../repository/EntidadeRepository');
class EntidadeController {
    constructor() {
        this.entidadeRepository = new EntidadeRepository();
    }

    async createEntidade(request) {
        const { body } = request;
        const entidade = new Entidade(body);
        const entidadeCurrent = await this.entidadeRepository.save(entidade);

        return entidadeCurrent;
    }

    async getAllEntidade() {
        const entidadeAll = await this.entidadeRepository.getAll();
        return entidadeAll;
    }

    async getById(req) {
        const { params } = req;
        const entidade = await this.entidadeRepository.getById(params.id);
        return entidade;
    }

    async delete(req) {
        const { params } = req;
        const entidade = await this.entidadeRepository.delete(params.id);
        return entidade;
    }

    async update(req) {
        const { params, body } = req;
        const entidade = await this.entidadeRepository.update(params.id, body);
        return entidade;
    }

    async getEntidadeByEntidadeStationId(req) {
        const { params } = req;
        const entidade = await this.entidadeRepository.getEntidadeByEntidadeStationId(params.id);
        return entidade;
    }


}

module.exports = EntidadeController;