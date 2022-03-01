const Funcionalidade = require('./Funcionalidades')
const fornecedor = require('../models/fornecedor')

module.exports = app => {
    Funcionalidade.ler(fornecedor.caminho)
};

