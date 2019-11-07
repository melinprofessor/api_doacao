const Doacao = require("../model/Doacao");
const DoacaoRepository = require("../repository/DoacaoRepository");

class DoacaoController {
  constructor() {
    this.doacaoRepository = new DoacaoRepository();
  }

  async createDoacao(request) {
    try {
      const { body } = request;
      const doacao = new Doacao(body);
      const doacaoCurrent = await this.doacaoRepository.save(doacao);
      return doacaoCurrent;
    } catch (error) {
      throw error;
    }
  }

  async getAllDoacao() {
    try {
        const doacaoAll = await this.doacaoRepository.getAll();
        return doacaoAll;
    } catch (error) {
        throw error;
    }
  }

  async getById(req) {
    try {
        const { params } = req;
        const doacao = await this.doacaoRepository.getById(params.id);
        return doacao;        
    } catch (error) {
        throw error;
    }

  }

  async doacaoByIdReceptora(req) {
    try {
        const { params } = req;
        const doacao = await this.doacaoRepository.doacaoByIdReceptora(params.id);
        return doacao;        
    } catch (error) {
        throw error;
    }

  }

  async doacaoByIdDoadora(req) {
    try {
        const { params } = req;
        const doacao = await this.doacaoRepository.doacaoByIdDoadora(params.id);
        return doacao;        
    } catch (error) {
        throw error;
    }

  }

  async delete(req) {
    try {
        const { params } = req;
        const doacao = await this.doacaoRepository.delete(params.id);
        return doacao;
    } catch (error) {
        throw error;
    }

  }

  async update(req) {
    try {
        const { params, body } = req;
        const doacao = await this.doacaoRepository.update(params.id, body);
        return doacao;
    } catch (error) {
        throw error;
    }

  }

  async getDoacaoByDoacaoStationId(req) {
    try {
        const { params } = req;
        const doacao = await this.doacaoRepository.getDoacaoByDoacaoStationId(
          params.id
        );
        return doacao;
    } catch (error) {
        throw error;   
    }

  }
}
module.exports = DoacaoController;
