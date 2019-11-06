const Entidade = require('../model/Entidade');

class EntidadeRepository {
    constructor() {
        this.entidadeModel = Entidade.getModel();
    }

    async save(entidadeModelEntity) {
        const entidade = new this.entidadeModel(entidadeModelEntity)
        try {

            if (await this.entidadeModel.findOne({ email: entidade.email })) {

                throw new Error('Email cadastrado para outra entidade!')
            }

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
            const entidade = await this.entidadeModel.findOneAndUpdate({ _id: id }, data, { new: true });
            return entidade;
        } catch (error) {
            throw error;
        }
    }

    async autenticar(email, password) {
        try {
            const entidade = await this.entidadeModel.findOne({ email });

            if (!entidade || entidade === null) {

                throw new Error('Usuário não encontrado!');
            }

            if (!(await entidade.compareHash(password))) {
                throw new Error('Senha inválida!');
            }
            return {
                entidade,
                token: entidade.generateToken()
            }
        } catch (error) {
            throw error;
        }
    }
}
module.exports = EntidadeRepository;