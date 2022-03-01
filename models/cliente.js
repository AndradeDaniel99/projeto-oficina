
const conexao = require('../infraestrutura/conexao')
const Models = require('./models')



 class Cliente extends Models{
    

    tipoContato = 'clientes'
    Caminho = '/cliente'


}
module.exports = new Cliente()
