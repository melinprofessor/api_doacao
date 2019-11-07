const Doacao = require('../model/Doacao');
const Entidade = require('../model/Entidade');


class DoacaoRepository {
    constructor() {
        this.doacaoModel = Doacao.getModel();
    }

    async save(doacaoModelEntity) {
        const doacao = new this.doacaoModel(doacaoModelEntity)
        try {
            await doacao.save();
            return doacao;
        } catch (error) {
            throw error;
        }
    }

    async getAll() {
        try {
            const doacaoAll = await this.doacaoModel.find().populate('entidadeDoadora',['name','active']).populate('entidadeReceptora',['name','active'])
            return doacaoAll;
        } catch (error) {
            throw error;
        }
    }

    async getByIdEntidadeDoadora(id) {
        try {
            const doacaoAll = await this.doacaoModel.find({ entidadeDoadora: { $ne: id }, entidadeReceptora: null}).populate('entidadeDoadora', ['name', 'active']).populate('entidadeReceptora', ['name', 'active'])
            return doacaoAll;
        } catch (error) {
            throw error;

        }
    }

    async getById(id) {
        try {
            const doacao = await this.doacaoModel.find({ _id: id });
            return doacao;
        } catch (error) {
            throw error;
        }
    }

    async doacaoByIdReceptora(id) {
        try {
            const doacao = await this.doacaoModel.find({ entidadeReceptora: id }).populate('entidadeReceptora',['name','active']);
            return doacao;
        } catch (error) {
            throw error;
        }
    }

    async doacaoByIdDoadora(id) {
        try {
            const doacao = await this.doacaoModel.find({ entidadeDoadora: id }).populate('entidadeReceptora',['name','active']);
            return doacao;
        } catch (error) {
            throw error;
        }
    }

    async delete(id) {
        try {
            const doacao = await this.doacaoModel.deleteOne({ _id: id });
            return doacao;
        } catch (error) {
            throw error;
        }
    }

    async update(id, data) {
        try {
            const doacao = this.doacaoModel.findOneAndUpdate({ _id: id }, data, { new: true });
            return doacao;
        } catch (error) {
            throw error;
        }
    }

    async countInformations(id) {
        try {
           
            const total = {
                totalDoacaoCount: 0,
                totalEntidades: 0,
                totalDoado: 0,
                totalRecibo: 0
            }
            const totalDoacao = await this.doacaoModel.find().estimatedDocumentCount();
            const totalEntidades = await Entidade.getModel().estimatedDocumentCount();
            const totalDoado = await Entidade.getModel().find({entidadeDoadora: id}).estimatedDocumentCount();
            const totalRecibo = await Entidade.getModel().countDocuments({entidadeReceptora: id});

            total.totalDoacaoCount = totalDoacao;
            total.totalEntidades = totalEntidades;
            total.totalDoado = totalDoado;
            total.totalRecibo = totalRecibo;
            return total
        } catch (error) {
            throw error;
        }
    }

    
}
module.exports = DoacaoRepository;