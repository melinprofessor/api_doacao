const Entidade = require('../model/Entidade');

class EntidadeRepository {
    constructor() {
        this.entidadeModel = Entidade.getModel();
    }

    async save(entidadeModelEntity) {
        const entidade = new this.entidadeModel(entidadeModelEntity)
        try {
            await entidade.save();
            return entidade;
        } catch (error) {
            throw error;
        }
    }

    async getAll() {
        try {
            const entidadeAll = await this.entidadeModel.find({});
            return entidadeAll;
        } catch (error) {
            throw error;
        }
    }

    async getById(id) {
        try {
            const entidade = await this.entidadeModel.find({ _id: id });
            return entidade;
        } catch (error) {
            throw error;
        }
    }

    async delete(id) {
        try {
            const entidade = await this.entidadeModel.deleteOne({ _id: id });
            return entidade;
        } catch (error) {
            throw error;
        }
    }

    async update(id, data) {
        try {
            const entidade = this.entidadeModel.findOneAndUpdate({ _id: id }, data, { new: true });
            return entidade;
        } catch (error) {
            throw error;
        }
    }
}
module.exports = EntidadeRepository;