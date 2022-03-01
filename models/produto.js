const conexao = require('../infraestrutura/conexao')
const moment = require('moment')
const Models = require('./models.js')
 class Produto extends Models
{
    tabela = 'produto'
    caminho = '/produto'

}

module.exports = new Produto()