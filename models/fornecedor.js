const conexao = require('../infraestrutura/conexao')
const Models = require('./models')


 class Fornecedor extends Models{
    

    tabela = 'fornecedor'
    caminho = '/fornecedor'

}
module.exports = new Fornecedor()
