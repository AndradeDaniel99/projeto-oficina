const conexao = require('../infraestrutura/conexao')
const Models = require('./models');
const Estoque = require('./estoque.js')
const Cliente = require('./cliente.js');
const res = require('express/lib/response');


class Order extends Models
{

    tabela = 'order';
    caminho = '/order';

    checkCliente()
    {
        const sql = 'SELECT EXISTS(SELECT 1 FROM clientes WHERE ID = '+ id +') AS EXISTE;';
        // retorna 0 se nao existir e 1 se existir 

    }

    checkProduto()
    {
        

    
    }


    retiraPeca(idProduto)
    {
        const sql = 'UPDATE' + Estoque.tabela + 'SET quantidade = (quantidade - 1) WHERE id ='+idProduto+';';
        // Codigo SQL para retirar peça
    }
    
    Integra(res) // Codigo para adicionar uma nova ordem de serviço 
    {

        temCliente = checkCliente(res.cpf).boleano;
        // Verificar se o cliente ja existe para ou adicionar ou entao levar o idCliente para poder adicionar o ordem
        if (!temCliente) // se nao existir vai adicionar
        {
            Cliente.adiciona(parametros_cliente);

            //idCliente = FALTANDO
        }
        else
        {
            idCliente = checkCliente().id;

        }

        idProduto = [];

        NumeroPeca = res.nome_peca.length;


        // Pode exisitir mais de uma peça na ordem, logo isso vai percorrer um array de entrada com todas as peças
        for (let i = 0; i <= NumeroPeca; i++)
        {
            Peca = checkProduto(res.nome_peca[i]);
            // Peça tem booleano, idProduto e valor 


            idProduto.push(Peca.idProduto);
            // TRATAR VALOR

            if(Peca.boleano)
            {
                retiraPeca(idProduto);
                //retirar peça q vai ser usada na ordem
            }
            else
            {
                throw Error;
                // se a peça estiver em falta lançar erro
            }
        }


        //ADICIONAR HISTORICOO


        return Tudo;
        //retorna json para add no adiciona da ordem


    }

}




module.exports = new Order()