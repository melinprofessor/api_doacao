const Doacao = require('../model/Doacao');
const DoacaoRepository = require('../repository/DoacaoRepository');
​
class DoacaoController {
    constructor() {
        this.doacaoRepository = new DoacaoRepository();
    }
​
    async createDoacao(request) {
        const {body} = request;
        const doacao = new Doacao(body);
        const doacaoCurrent = await this.doacaoRepository.save(doacao);
​
        return doacaoCurrent;
    }
​
    async getAllDoacao() {
        const doacaoAll = await this.doacaoRepository.getAll();
        return doacaoAll;
    }
​
    async getById(req) {
        const {params} = req;
        const doacao = await this.doacaoRepository.getById(params.id);
        return doacao;
    }
​
    async delete(req) {
        const {params} = req;
        const doacao = await this.doacaoRepository.delete(params.id);
        return doacao;
    }
​
    async update(req) {
        const {params, body} = req;
        const doacao = await this.doacaoRepository.update(params.id, body);
        return doacao;
    }
​
    async getDoacaoByDoacaoStationId(req) {
        const {params} = req;
        const doacao = await this.doacaoRepository.getDoacaoByDoacaoStationId(params.id);
        return doacao;
    }
​
​
}
​
module.exports = DoacaoController;