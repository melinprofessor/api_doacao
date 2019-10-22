const Mercadoria = require('../model/Mercadoria');

class MercadoriaRepository {
    constructor() {
        this.mercadoriaModel = Mercadoria.getModel();
    }

    async save(mercadoriaModelEntity) {
        const mercadoria = new this.mercadoriaModel(mercadoriaModelEntity)
        try {
            await mercadoria.save();
            return mercadoria;
        } catch (error) {
            throw error;
        }
    }

    async getAll() {
        try {
            const mercadoriaAll = await this.mercadoriaModel.find({});
            return mercadoriaAll;
        } catch (error) {
            throw error;
        }
    }

    async getById(id) {
        try {
            const mercadoria = await this.mercadoriaModel.find({_id: id});
            return mercadoria;
        } catch (error) {
            throw error;
        }
    }

    async delete(id) {
        try {
            const mercadoria = await this.mercadoriaModel.deleteOne({_id: id});
            return mercadoria;
        } catch (error) {
            throw error;
        }
    }

    async update(id, data) {
        try {
            const mercadoria = this.mercadoriaModel.findOneAndUpdate({_id:id}, data,{new: true});
            return mercadoria;
        } catch (error) {
            throw error;
        }
    }
}
module.exports = MercadoriaRepository;