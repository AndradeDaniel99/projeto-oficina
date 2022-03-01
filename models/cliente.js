const conexao = require('../infraestrutura/conexao')
const Models = require('./models')



 class Cliente extends Models{
    

    tabela = 'clientes'
    Caminho = '/cliente'


}
module.exports = new Cliente()
