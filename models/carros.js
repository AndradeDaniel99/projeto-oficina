const conexao = require('../infraestrutura/conexao')
const Models = require('./models.js')

class Carro extends Models
{

    tabela = 'carros';
    Caminho = '/veiculo';
    
}

module.exports = new Carro()
