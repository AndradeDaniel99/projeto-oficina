const conexao = require('../infraestrutura/conexao')
const Models = require('./models');
const Estoque = require('./estoque.js')
const Cliente = require('./cliente.js');
const res = require('express/lib/response');


class Order extends Models
{

    tabela = 'order';
    caminho = '/order';

    constructor(req)
    {

        if(!checkCliente())
        {
            InfoCliente = ...;
            Cliente.adiciona(InfoCliente);
        }


        idCliente = GetClienteId(cpfCliente)
        tipo = res;
        valor_mao = res;
        data_saida = res;


        getPeca()
        RetiraPeca()

        

    }
}




module.exports = new Order()