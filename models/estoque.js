const conexao = require('../infraestrutura/conexao')
const Models = require('./models.js')


 class Estoque extends Models
{
    tabela = 'estoque'
    Caminho = '/estoque'

}

module.exports = new Estoque()