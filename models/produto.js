const conexao = require('../infraestrutura/conexao')
const moment = require('moment')

 class Produto
{

    adiciona(produto, res){

        const produtoValido = produto.nome.length >=3

        const validacoes = [
            {
                nome: 'produto',
                valido: produtoValido,
                mensagem: 'o campo deve ter pelo menos 3 caracteres'
            }
        ]

        const erros = validacoes.filter(campo => !campo.valido)
        const existemErros = erros.length

        if (existemErros) {
            res.status(400).json(erros)
        } else{
            console.log(this.nome)
            const sql = 'INSERT INTO produto SET ?'

            conexao.query(sql, produto, (erro, resultados)=>{
                if (erro) {
                    res.status(400).json(erro)
                } else{
                    res.status(201).json({produto})
                }
            })
        }
    }

    lista(res){
        const sql = 'SELECT * FROM produto'

        conexao.query(sql, (erro, resultados)=>{
            if (erro) {
                res.status(400).json(erro)
            } else {
                res.status(200).json(resultados)
            }
        })
    }

    buscaPorId(id, res){
        const sql = 'SELECT * FROM produto WHERE id = ' + id
        conexao.query(sql, (erro, resultados)=>{
            if (erro) {
                res.status(400).json(erro)
            } else {
                res.status(200).json({id})
            }
        })
    }

    altera(id, valores, res){

        const sql = 'UPDATE produto SET ? WHERE id=?'
        conexao.query(sql, [valores, id], (erro, resultados)=>{
            if (erro) {
                res.status(400).json(erro)
            } else {
                res.status(200).json({...valores, id})
            }
        })
    }

    deleta(id, res){
        const sql = 'DELETE FROM produto WHERE id = ' + id

        conexao.query(sql, (erro, resultados)=>{
            if (erro) {
                res.status(400).json(erro)
            } else {
                res.status(200).json({id})
            }
        })
    }
}

module.exports = new Produto()