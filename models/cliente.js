const conexao = require('../infraestrutura/conexao')
const Models = require('./models')


/**
 * classe que representa um cliente
 */
 class Cliente extends Models{

    tabela = 'clientes'
    caminho = '/cliente'

    GetId(nome){

        

    }
}

/**
 * exporta um objeto do tipo Cliente
 */
module.exports = new Cliente()
