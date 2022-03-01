const conexao = require('../infraestrutura/conexao')
const moment = require('moment')

export class Contato{


    #_tipoContato;

    get TipoContato()
    {
        return this.#_tipoContato;
    }
    set TipoContato(TIPO_DO_CONTATO)
    {
        #_tipoContato = TIPO_DO_CONTATO;
    }


    adiciona(contato, res){

        

        const contatoValido = contato.nome.length >=3


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
