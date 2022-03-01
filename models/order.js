const conexao = require('../infraestrutura/conexao')
const moment = require('moment');
const Models = require('./models');

class Order extends Models{

    tipoContato = 'order'
    Caminho = '/order'


}