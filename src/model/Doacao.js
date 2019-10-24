const moongoose = require('mongoose');

let model = null;
let schemaDoacao = null;

class Doacao {
    constructor({ _id, id, active, products, entidade, mercadoria, updatedAt}) {
        this.id = _id || id || null;
        this.active = active;
        this.products = products;
        this.entidade = entidade;
        this.mercadoria = mercadoria;
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

    setEntidade(entidade) {
        this.entidade = entidade;
        return this;
    }

    setMercadoria(mercadoria) {
        this.mercadoria = mercadoria;
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
                entidade: {type: Schema.Types.ObjectId, required:[true, '{PATH} is required!']},                
                mercadoria: {type: Schema.Types.ObjectId, required:[true, '{PATH} is required!']}
            })

            schemaDoacao.index({name: 1}, {unique: true});
            model = moongoose.model('Doacao', schemaDoacao);
        }

        return model;
    }

}

module.exports = Doacao;