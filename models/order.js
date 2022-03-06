const conexao = require('../infraestrutura/conexao')
const Models = require('./models');
const Estoque = require('./estoque.js')


class Order extends Models
{

    tabela = 'order'
    caminho = '/order'


    /* podia ser usado o altera do proprio estoque*/
   /*retirarEstoque(buscador, produto , res)
    {

        const sql = 'UPDATE' + Estoque.tabela + 'SET quantidade = (quantidade - 1) WHERE'+ buscador+ '='+ produto +';'
        conexao.query(sql, [buscador, produto], (erro, resultados)=>{
        if (erro) 
        {
            res.status(400).json({ 
                message: 'usuário e/ou senha incorreta!'
            })
        } 
        else 
        {
            res.status(200).json({ 
                'auth': 'logado',
                ...valor1, 
                id
            })
        }
    })*/



    }

}




module.exports = new Order()