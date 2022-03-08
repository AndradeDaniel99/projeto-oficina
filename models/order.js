const conexao = require('../infraestrutura/conexao')
const Models = require('./models');
const Estoque = require('./estoque.js')


class Order extends Models
{

    tabela = 'order'
    caminho = '/order'

    /*constructor(entradas)
    {
        this.RetiraPeca()
        if(this.CheckCliente())
        {
            this.addCliente()
        }

    }

    RetiraPeca(id, valores, res)
    {
        altera(id, valores, res)
        {
            const sql = 'UPDATE' + Estoque.tabela + 'SET quantidade = (quantidade - 1) WHERE'+ buscador+ '='+ produto +';'
            this._Altera(id, sql, valores, res)
    
        }


    }*/


    

}




module.exports = new Order()