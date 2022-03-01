const conexao = require('../infraestrutura/conexao')
const Models = require('./models.js')

class Carro extends Models
{

    tabela = 'carro';
    Caminho = '/veiculo';
    
}

module.exports = new Carro()
