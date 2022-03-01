const conexao = require('../infraestrutura/conexao')
const moment = require('moment');

 class Models
{

    tabela;
    caminho;


    adiciona(contato, res){

        

        /*const contatoValido = contato.tabela.length >=3


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
        } else{*/
            console.log(this.tabela)
            const sql = 'INSERT INTO '+ this.tabela + ' SET ?'

            conexao.query(sql, contato, (erro, resultados)=>{
                if (erro) {
                    res.status(400).json(erro)
                } else{
                    res.status(201).json({contato})
                }
            })
        //}
    }

    lista(tabela, res){
        const sql = 'SELECT * FROM '+tabela

        conexao.query(sql, (erro, resultados)=>{
            if (erro) {
                res.status(400).json(erro)
            } else {
                res.status(200).json(resultados)
            }
        })
    }

    buscaPorId(id, tabela, res){
        const sql = 'SELECT * FROM '+ tabela + ' WHERE id = ' + id
        conexao.query(sql, (erro, resultados)=>{
            if (erro) {
                res.status(400).json(erro)
            } else {
                res.status(200).json(resultados)
            }
        })
    }

    altera(id, valores, tabela, res){

        const sql = 'UPDATE '+tabela+' SET ? WHERE id=?'
        conexao.query(sql, [valores, id], (erro, resultados)=>{
            if (erro) {
                res.status(400).json(erro)
            } else {
                res.status(200).json({...valores, id})
            }
        })
    }

    deleta(id, res){
        const sql = 'DELETE FROM'+tabela+ 'WHERE id = ' + id

        conexao.query(sql, (erro, resultados)=>{
            if (erro) {
                res.status(400).json(erro)
            } else {
                res.status(200).json({id})
            }
        })
    }
}

module.exports = Models
