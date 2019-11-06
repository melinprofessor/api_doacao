const moongoose = require('mongoose');

let model = null;
let schemaDoacao = null;

class Doacao {
    constructor({ _id, id, active, products, entidadeDoadora, entidadeReceptora, updatedAt}) {
        this.id = _id || id || null;
        this.active = active;
        this.products = products;
        this.entidadeDoadora = entidadeDoadora;
        this.entidadeReceptora = entidadeReceptora;
        this.updatedAt = updatedAt;
    }

    setId(id) {
        this.id = id;
        return this;
    }

    setActive(active) {
        this.active = active;
        return this;
    }

    setProducts(products) {
        this.products = products;
        return this;
    }

    setEntidade(entidadeDoadora) {
        this.entidadeDoadora = entidadeDoadora;
        return this;
    }

    setMercadoria(entidadeReceptora) {
        this.entidadeReceptora = entidadeReceptora;
        return this;
    }

    setUpdatedAt(updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    }

    static getModel(){
        if (model === null && schemaDoacao === null){
            const {Schema} = moongoose;

            schemaDoacao = new Schema({
                createdAt: {type: Date, default: Date.now},
                updatedAt: {type: Date},
                active: {type: Boolean, required: [true, '{PATH} is required!']},
                products: {type: Object, required: [true, '{PATH} is required!']},
                entidadeDoadora: {type: Schema.Types.ObjectId, ref: "Entidade", required:[true, '{PATH} is required!']},   
                entidadeReceptora: {type: Schema.Types.ObjectId, ref: "Entidade"},
            })

            // schemaDoacao.index({name: 1}, {unique: true});
            model = moongoose.model('Doacao', schemaDoacao, 'doacoes');
        }

        return model;
    }

}

module.exports = Doacao;