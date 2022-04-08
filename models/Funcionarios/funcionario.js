const conexao = require('../infraestrutura/conexao')
const Models = require ('./models/models.js');

/**
 * classe que representa um funcionario
 */
class Funcionario extends Models{
    

    tipoContato = 'funcionario'
    posicao; 


}

/**
 * nome do modulo
 */
module.exports = Funcionario()
