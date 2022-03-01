const conexao = require('../infraestrutura/conexao')
const moment = require('moment')
const Models = require('./models.js')
 class Produto extends Models
{
    tipoContato = 'produto'
    Caminho = '/produto'

}

module.exports = new Produto()