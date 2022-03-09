const conexao = require('../infraestrutura/conexao')
const Models = require('./models');
const Estoque = require('./estoque.js')
const Cliente = require('./cliente.js')


class Order extends Models
{

    tabela = 'order'
    caminho = '/order'

    /*constructor(entradas)
    {
        this.RetiraPeca()
        if(this.CheckCliente())
        {
            Cliente.adiciona()
        }

    }

    RetiraPeca(buscador, valores, res)
    {
        altera(id, valores, res)
        {
            const sql = 'UPDATE' + Estoque.tabela + 'SET quantidade = (quantidade - 1) WHERE'+ buscador+ '='+ produto +';'
            this._Altera(id, sql, valores, res)
    
        }


    }

    CheckCliente(id)
    
    {

        const sql = 'SELECT EXISTS(SELECT 1 FROM clientes WHERE ID = '+ id +') AS EXISTE;'
        conexao.query(sql, (erro, resultados)=>{
            if (erro) {
                res.status(400).json({ 
                    message: 'usuário e/ou senha incorreta!'
                })
            } else {
                res.status(200).json({ 
                    'auth': 'logado',
                    resultados
                })
            }
        })

    }*/


    

}




module.exports = new Order()