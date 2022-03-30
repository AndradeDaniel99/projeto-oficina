const conexao = require('../infraestrutura/conexao')
const Models = require('./models');
const Estoque = require('./estoque.js')
const Cliente = require('./cliente.js');
const res = require('express/lib/response');
const Produto = require('./produto.js')


class Order extends Models
{

    tabela = 'order';
    caminho = '/order';

    /*
   Check(idCheck, tabela)
    {
        const sql = 'SELECT EXISTS(SELECT 1 FROM' + tabela + ' WHERE ID = '+ idCheck +') AS EXISTE;';
        // retorna 0 se nao existir e 1 se existir 

        //ADD CONEXÃO 





        //return VALOR 0 ou 1
    }



    retiraPeca(idProduto)
    {
        const sql = 'UPDATE' + Estoque.tabela + 'SET quantidade = (quantidade - 1) WHERE id ='+idProduto+';';
        // Codigo SQL para retirar peça, retira uma peça nao retorna nada 
        
    }

    
    Integra(res) // Codigo para adicionar uma nova ordem de serviço 
    {

        temCliente = Check(res.nome, Cliente.tabela);
        // Verificar se o cliente ja existe para ou adicionar ou entao levar o idCliente para poder adicionar o ordem
        if (!temCliente) // se nao existir vai adicionar
        {
            Cliente.adiciona(parametros_cliente);

            //idCliente = GetId()
        }
        
        let idCliente = GetId()




        let idProduto = [];
        let Valor = 0;

        NumeroPeca = res.nome_peca.length;


        // Pode exisitir mais de uma peça na ordem, logo isso vai percorrer um array de entrada com todas as peças
        for (let i = 0; i <= NumeroPeca; i++)
        {
            temProduto = Check(res.nome_peca[i], Produto.tabela);
            // Ve se exisite 


            if(temProduto)
            {
                retiraPeca(idProduto);
                idProduto.push(Peca.idProduto);
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


    }*/



}




module.exports = new Order()