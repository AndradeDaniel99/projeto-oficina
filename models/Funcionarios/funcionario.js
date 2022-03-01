const conexao = require('../infraestrutura/conexao')
const Models = require ('./models/models.js');


class Funcionario extends Models{
    

    tipoContato = 'funcionario'
    posicao; 


}
module.exports = Funcionario()
