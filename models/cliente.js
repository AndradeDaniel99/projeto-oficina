const conexao = require('../infraestrutura/conexao')
const moment = require('moment')

class Cliente{
    adiciona(cliente, res){

        const clienteValido = cliente.nome.length >=5

        const validacoes = [
            {
                nome: 'nome',
                valido: clienteValido,
                mensagem: 'nome deve ter pelo menos 5 caracteres'
            }
        ]

        const erros = validacoes.filter(campo => !campo.valido)
        const existemErros = erros.length

        if (existemErros) {
            res.status(400).json(erros)
        } else{
            const sql = 'INSERT INTO Clientes SET ?'

            conexao.query(sql, cliente, (erro, resultados)=>{
                if (erro) {
                    res.status(400).json(erro)
                } else{
                    res.status(201).json({cliente})
                }
            })
        }
    }

    lista(res){
        const sql = 'SELECT * FROM Clientes'

        conexao.query(sql, (erro, resultados)=>{
            if (erro) {
                res.status(400).json(erro)
            } else {
                res.status(200).json(resultados)
            }
        })
    }

    buscaPorId(id, res){
        const sql = 'SELECT * FROM Clientes WHERE idClientes = ' + id
        conexao.query(sql, (erro, resultados)=>{
            if (erro) {
                res.status(400).json(erro)
            } else {
                res.status(200).json({id})
            }
        })
    }

    altera(id, valores, res){

        const sql = 'UPDATE Clientes SET ? WHERE idClientes=?'
        conexao.query(sql, [valores, id], (erro, resultados)=>{
            if (erro) {
                res.status(400).json(erro)
            } else {
                res.status(200).json({...valores, id})
            }
        })
    }

    deleta(id, res){
        const sql = 'DELETE FROM Clientes WHERE idClientes = ' + id

        conexao.query(sql, (erro, resultados)=>{
            if (erro) {
                res.status(400).json(erro)
            } else {
                res.status(200).json({id})
            }
        })
    }
}

module.exports = new Cliente
