const Funcionario = require ('./funcionario.js')

/**
 * classe que representa um mecanico
 */
class Mecanico extends Funcionario{
    
    posicao =  'mecanico';


}

/**
 * nome do modulo
 */
module.exports = Mecanico