const conexao = require('../infraestrutura/conexao')
const moment = require('moment')
const Contato = require ('./contato')


 class Fornecedor extends Contato{
    

    tipoContato = 'fornecedor'


}
module.exports = new Fornecedor()
