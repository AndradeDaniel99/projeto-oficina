const conexao = require('../infraestrutura/conexao')
const moment = require('moment')
const contato = require ('./contato')
class Cliente extends contato{
    constructor(){
        super('clientes')
    }
}
module.exports = new Cliente('cliente')
