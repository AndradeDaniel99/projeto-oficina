const conexao = require('../infraestrutura/conexao')
const Models = require('./models')



 class Cliente extends Models{

    tabela = 'clientes'
    caminho = '/cliente'

    
}

module.exports = new Cliente()
