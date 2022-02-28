const conexao = require('../infraestrutura/conexao')
const moment = require('moment')

class Atendimento{
    adiciona(atendimento, res){

        const dataCriacao = moment().format('YYYY-MM-DD HH:MM:SS')
        const data = moment(atendimento.data, 'DD/MM/YYYY').format('YYYY-MM-DD HH:MM:SS')

        const dataValida = moment(data).isSameOrAfter(dataCriacao)
        const clienteValido = atendimento.cliente.length >=3

        const validacoes = [
            {
                nome: 'data',
                valido: dataValida,
                mensagem: 'data deve ser maior ou igual a atual'

            },
            {
                nome: 'cliente',
                valido: clienteValido,
                mensagem: 'nome deve ter pelo menos 3 caracteres'
            }
        ]

        const erros = validacoes.filter(campo => !campo.valido)
        const existemErros = erros.length

        if (existemErros) {
            res.status(400).json(erros)
        } else{
            const atendimentoDatado = {...atendimento, dataCriacao, data}
            const sql = 'INSERT INTO Clientes SET ?'

            conexao.query(sql, atendimentoDatado, (erro, resultados)=>{
                if (erro) {
                    res.status(400).json(erro)
                } else{
                    res.status(201).json({atendimento})
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
        const sql = 'SELECT * FROM Clientes WHERE id = ' + id
        conexao.query(sql, (erro, resultados)=>{
            if (erro) {
                res.status(400).json(erro)
            } else {
                res.status(200).json({id})
            }
        })
    }

    altera(id, valores, res){
        if (valores.data) {
            valores.data = moment(valores.data, 'DD/MM/YYYY').format('YYYY-MM-DD HH:MM:SS')
        }

        const sql = 'UPDATE Clientes SET ? WHERE id=?'
        conexao.query(sql, [valores, id], (erro, resultados)=>{
            if (erro) {
                res.status(400).json(erro)
            } else {
                res.status(200).json({...valores, id})
            }
        })
    }

    deleta(id, res){
        const sql = 'DELETE FROM Clientes WHERE id = ?'

        conexao.query(sql, id, (erro, resultados)=>{
            if (erro) {
                res.status(400).json(erro)
            } else {
                res.status(200).json({id})
            }
        })
    }
}

module.exports = new Atendimento
