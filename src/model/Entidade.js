const moongoose = require('mongoose');
const jtw = require('jsonwebtoken');
const bcrypt = require('bcrypt');

let model = null;
let schemaEntidade = null;

class Entidade {
    constructor({ _id, id, active, name, email, password, address, contact, description, updatedAt}) {
        this.id = _id || id || null;
        this.active = active;
        this.name = name || null;
        this.email = email;
        this.password = password;
        this.address = address;
        this.contact = contact;
        this.description = description;
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

    setName(name) {
        this.name = name;
        return this;
    }

    setEmail(email) {
        this.email = email;
        return this;
    }

    setPassword(password) {
        this.password = password;
        return this;
    }

    setAddress(address) {
        this.address = address;
        return this;
    }

    setContact(contact) {
        this.contact = contact;
        return this;
    }

    setDescription(description) {
        this.description = description;
        return this;
    }

    setUpdatedAt(updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    }

    static getModel(){
        if (model === null && schemaEntidade === null){
            const {Schema} = moongoose;

            schemaEntidade = new Schema({
                createdAt: {type: Date, default: Date.now},
                updatedAt: {type: Date},
                active: {type: Boolean, required: [true, '{PATH} is required!']},
                name: {type: String, required: [true, '{PATH} is required!']},
                email: {type: String, unique: true, required: [true, '{PATH} is required!']},
                password: {type: String, required: [true, '{PATH} is required!']},
                address: {type: Object, required: [true, '{PATH} is required!']},
                contact: {type: Object, required: [true, '{PATH} is required!']},
                description: {type: String}
            })

            schemaEntidade.index({email: 1}, {unique: true});
            schemaEntidade.pre('save', async function hasPassword(next){
                
                if(!this.isModified('password')) next();

                this.password = await bcrypt.hash(this.password, 8);

            });

            schemaEntidade.methods = {
                compareHash(hash) {
                    return bcrypt.compare(hash, this.password);
                },
                generateToken() {
                    return jtw.sign({ id: this._id }, "secret", {
                        expiresIn: 86400
                    });
                }
            };

            model = moongoose.model('Entidade', schemaEntidade);
        }

        return model;
    }

}

module.exports = Entidade;