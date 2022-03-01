const Funcionalidade = require('./Funcionalidades')
const Fornecedor = require('../models/fornecedor')

module.exports = app => {
    Funcionalidade.ler(Fornecedor)
};

