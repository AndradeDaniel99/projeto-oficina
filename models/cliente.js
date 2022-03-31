const conexao = require('../infraestrutura/conexao')
const Models = require('./models')



 class Cliente extends Models{

    tabela = 'clientes'
    caminho = '/cliente'

    GetId(nome){

        

    }
}

module.exports = new Cliente()
