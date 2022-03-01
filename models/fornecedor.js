const conexao = require('../infraestrutura/conexao')
const moment = require('moment')
const Models = require('./models')


 class Fornecedor extends Models{
    

    tipoContato = 'fornecedor'
    caminho = '/fornecedor'

}
module.exports = new Fornecedor()
