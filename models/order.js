const conexao = require('../infraestrutura/conexao')
const Models = require('./models');

class Order extends Models{

    tabela = 'order'
    caminho = '/order'


}

module.exports = new Order()