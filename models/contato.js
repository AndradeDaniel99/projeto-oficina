const conexao = require('../infraestrutura/conexao')
const moment = require('moment')

class Contato{

    adiciona(contato, res){

        const contatoValido = contato.nome.length >=3

        constructor(tipoContato)
            this.nome = contato.nome
            this.cpf = contato.cpf
            this.cnpj = contato.cnpj
            this.telefone1 = contato.telefone1
            this.telefone2 = contato.telefone2
            this.telefone3 = contato.telefone3
            this.celular = contato.celular
            this.email = contato.email
            this.endereco = contato.endereco
            this.tipoContato = tipoContato


        const validacoes = [
            {
                nome: 'contato',
                valido: contatoValido,
                mensagem: 'o campo deve ter pelo menos 3 caracteres'
            }
        ]

        const erros = validacoes.filter(campo => !campo.valido)
        const existemErros = erros.length

        if (existemErros) {
            res.status(400).json(erros)
        } else{
            const sql = 'INSERT INTO '+tipoContato+' SET ?'

            conexao.query(sql, contato, (erro, resultados)=>{
                if (erro) {
                    res.status(400).json(erro)
                } else{
                    res.status(201).json({contato})
                }
            })
        }
    }

    lista(res){
        const sql = 'SELECT * FROM'+tipoContato

        conexao.query(sql, (erro, resultados)=>{
            if (erro) {
                res.status(400).json(erro)
            } else {
                res.status(200).json(resultados)
            }
        })
    }

    buscaPorId(id, res){
        const sql = 'SELECT * FROM '+tipoContato+' WHERE id = ' + id
        conexao.query(sql, (erro, resultados)=>{
            if (erro) {
                res.status(400).json(erro)
            } else {
                res.status(200).json({id})
            }
        })
    }

    altera(id, valores, res){

        const sql = 'UPDATE'+tipoContato+' SET ? WHERE id=?'
        conexao.query(sql, [valores, id], (erro, resultados)=>{
            if (erro) {
                res.status(400).json(erro)
            } else {
                res.status(200).json({...valores, id})
            }
        })
    }

    deleta(id, res){
        const sql = 'DELETE FROM'+tipoContato+ 'WHERE id = ' + id

        conexao.query(sql, (erro, resultados)=>{
            if (erro) {
                res.status(400).json(erro)
            } else {
                res.status(200).json({id})
            }
        })
    }
}

module.exports = Contato
