const conexao = require('../infraestrutura/conexao')
const Models = require('./models.js')

/**
 * classe que representa um veiculo no sistema
 */
class Veiculo extends Models
{

    tabela = 'carros';
    caminho = '/veiculo';
    
}

/**
 * exporta um objeto do tipo Veiculo
 */
module.exports = new Veiculo()
