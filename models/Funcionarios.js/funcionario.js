const conexao = require('../infraestrutura/conexao')
const moment = require('moment')
const Contato = require ('./models/contato.js')


class Funcionario extends Contato{
    

    tipoContato = 'funcionario'
    posicao; 


}
module.exports = Funcionario()
