const conexao = require('../infraestrutura/conexao')
const moment = require('moment')
const Models = require('./models.js')

/**
 * classe que representa um produto
 */
 class Produto extends Models
{
    tabela = 'produto'
    caminho = '/produto'

}

/**
 * exporta um objeto do tipo Produto
 */
module.exports = new Produto()