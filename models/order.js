const conexao = require('../infraestrutura/conexao')
const Models = require('./models');
const Estoque = require('./estoque.js')
const Cliente = require('./cliente.js');
const res = require('express/lib/response');


class Order extends Models
{

    tabela = 'order';
    caminho = '/order';

    /*checkCliente()
    checkProduto()
    retiraPeca()
    
    Integra(res)
    {

        temCliente = checkCliente(res.cpf).boleano;
        if (!temCliente)
        {
            Cliente.adiciona(parametros_cliente);
            //retornar id cliente
            //idCliente =
        }
        else
        {
            idCliente = checkCliente().id;

        }


        Peca = checkProduto(res.nome_peca).boleano;
        idProduto = Peca.idProduto
        //Peca tem boleano, idProduto, Valor

        if(Peca.boleano)
        {
            retiraPeca(idProduto);
        
        }
        else
        {
            throw Error;
        }


        return Tudo;


    }*/

}




module.exports = new Order()