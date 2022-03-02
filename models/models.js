const conexao = require('../infraestrutura/conexao')
const moment = require('moment');

 class Models
{

    tabela;
    caminho;


    adiciona(objeto, res){

        

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
            const sql = 'INSERT INTO '+ this.tabela + ' SET ?'

            const object = objeto[1]

            conexao.query(sql, object, (erro, resultados)=>{
                if (erro) {
                    res.status(400).json({ 
                        'message': 'usuário e/ou senha incorreta!',
                        erro
                    })
                } else{
                    res.status(200).json({ 
                        'auth': 'logado',
                        object
                    })
                }
            })
        //}
    }

    lista(res){
        const sql = 'SELECT * FROM '+this.tabela+";"

        conexao.query(sql, (erro, resultados)=>{
            if (erro) {
                res.status(400).json({ 
                    message: 'usuário e/ou senha incorreta!',
                    valores
                })
            } else {
                res.status(200).json({ 
                    'auth': 'logado',
                    resultados
                })
            }
        })
    }

    buscaPorId(id, res){
        const sql = 'SELECT * FROM '+ this.tabela + ' WHERE id = ' + id
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
    }

    altera(id, valores, res){

        const sql = 'UPDATE '+this.tabela+' SET ? WHERE id=?'
        conexao.query(sql, [valores, id], (erro, resultados)=>{

            if (erro) {
                res.status(400).json({ 
                    message: 'usuário e/ou senha incorreta!'
                })
            } else {
                res.status(200).json({ 
                    'auth': 'logado',
                    ...valores, 
                    id
                })
            }
        })
    }

    deleta(id, res){
        const sql = 'DELETE FROM '+this.tabela+ ' WHERE id = ' + id

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
    }
}

module.exports = Models
