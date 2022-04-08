const conexao = require('../infraestrutura/conexao')
const Models = require('./models')

/**
 * classe que representa um fornecedor
 */
 class Fornecedor extends Models{
    

    tabela = 'fornecedor'
    caminho = '/fornecedor'

}

/**
 * exporta um objeto do tipo Fornecedor
 */
module.exports = new Fornecedor()
