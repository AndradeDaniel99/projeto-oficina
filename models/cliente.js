
const conexao = require('../infraestrutura/conexao')
const moment = require('moment')
const Contato = require ('./contato')


 class Cliente extends Contato{
    

    tipoContato = 'clientes'
   /* constructor(Valor)
    {
        super(Valor)

    }*/


}
module.exports = new Cliente('clientes')
