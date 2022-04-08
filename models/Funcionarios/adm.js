const Funcionario = require ('./funcionario.js')

/**
 * classe que representa o administrador do sistema
 */
class Adm extends Funcionario{
    
    posicao =  'adm';

}

/**
 * nome do modulo
 */
module.exports = Adm