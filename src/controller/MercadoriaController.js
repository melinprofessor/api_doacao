const Mercadoria = require('../model/Mercadoria');
const MercadoriaRepository = require('../repository/MercadoriaRepository');

class MercadoriaController {
    constructor() {
        this.mercadoriaRepository = new MercadoriaRepository();
    }

    async createMercadoria(request) {
        const {body} = request;
        const Mercadoria = new Mercadoria(body);
        const mercadoriaCurrent = await this.mercadoriaRepository.save(mercadoria);

        return mercadoriaCurrent;
    }

    async getAllMercadoria() {
        const mercadoriaAll = await this.mercadoriaRepository.getAll();
        return mercadoriaAll;
    }

    async getById(req) {
        const {params} = req;
        const mercadoria = await this.mercadoriaRepository.getById(params.id);
        return mercadoria;
    }

    async delete(req) {
        const {params} = req;
        const mercadoria = await this.mercadoriaRepository.delete(params.id);
        return mercadoria;
    }

    async update(req) {
        const {params, body} = req;
        const mercadoria = await this.mercadoriaRepository.update(params.id, body);
        return mercadoria;
    }

    async getMercadoriaByMercadoriaStationId(req) {
        const {params} = req;
        const mercadoria = await this.mercadoriaRepository.getMercadoriaByMercadoriaStationId(params.id);
        return mercadoria;
    }


}

module.exports = MercadoriaController;