const conexao = require('../infraestrutura/conexao')
const moment = require('moment')
const Models = require('./models.js')
 class Produto extends Models
{
    tabela = 'produto'
    Caminho = '/produto'

}

module.exports = new Produto()