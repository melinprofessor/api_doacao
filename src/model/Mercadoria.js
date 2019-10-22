const moongoose = require('mongoose');

let model = null;
let schemaMercadoria = null;

class Mercadoria {
    constructor({ _id, id, active, products, entidade, updatedAt}) {
        this.id = _id || id || null;
        this.active = active;
        this.products = products;
        this.entidade = entidade;
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

    setUpdatedAt(updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    }

    static getModel(){
        if (model === null && schemaMercadoria === null){
            const {Schema} = moongoose;

            schemaMercadoria = new Schema({
                createdAt: {type: Date, default: Date.now},
                updatedAt: {type: Date},
                active: {type: Boolean, required: [true, '{PATH} is required!']},
                products: {type: Array, required: [true, '{PATH} is required!']},
                entidade: {type: Schema.Types.ObjectId, required:[true, '{PATH} is required!']},                
            })

            schemaMercadoria.index({name: 1}, {unique: true});
            model = moongoose.model('Mercadoria', schemaMercadoria);
        }

        return model;
    }

}

module.exports = Mercadoria;