const conexao = require('../infraestrutura/conexao')
const Models = require('./models');
const Estoque = require('./estoque.js')
const Cliente = require('./cliente.js')


class Order extends Models
{

    tabela = 'order';
    caminho = '/order';

    /*constructor(req)
    {

        if(!checkCliente())
        {
            InfoCliente = ...;
            Cliente.adiciona(InfoCliente);
        }


        idCliente = GetClienteId(cpfCliente)
        




    }*/
}




module.exports = new Order()