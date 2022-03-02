const conexao = require('../infraestrutura/conexao')
const Models = require('./models.js')

class Veiculo extends Models
{

    tabela = 'carros';
    caminho = '/veiculo';
    
}

module.exports = new Veiculo()
