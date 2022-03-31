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


    /*retiraPeca(idProduto)
    {
        const sql = 'UPDATE' + Estoque.tabela + 'SET quantidade = (quantidade - 1) WHERE id ='+idProduto+';';
        // Codigo SQL para retirar peça, retira uma peça nao retorna nada 
        // ADD CONEXÃO
        
    }

    
    TratarCliente(res) // Codigo para adicionar uma nova ordem de serviço 
    {

        idCliente = Cliente.GetId(res.nome)

        // Verificar se o cliente ja existe para ou adicionar ou entao levar o idCliente para poder adicionar o ordem
        if (idCliente == null) // se nao existir vai adicionar
        {

            Cliente.adiciona(parametros_cliente);

            let idCliente = Cliente.GetId(res.nome)
            // res mesmo?

            return idCliente
        }
        
        let idCliente = Cliente.GetId(res.nome)

        return idCliente

    }
    
    TratarProduto(res){


        let idProdutos = [];
        let Valor = 0;

        NumeroPeca = res.nome_peca.length;


        // Pode exisitir mais de uma peça na ordem, logo isso vai percorrer um array de entrada com todas as peças
        for (let i = 0; i <= NumeroPeca; i++)
        {   

            let idDoProduto = Estoque.GetId(res.nome_peca[i])
            // Ve se exisite 


            if(temProduto != null)
            {
                retiraPeca(idDoProduto);
                //retirar peça q vai ser usada na ordem


                idProdutos.push(idDoProduto);
                //Inserir id no array

                //TRATAR VALOR DA PEÇA

            }
            else
            {
                throw Error;
                // se a peça estiver em falta lançar erro
            }

            return [idProdutos, Valor]
        }


        //ADICIONAR HISTORICOO



    }*/



}




module.exports = new Order()