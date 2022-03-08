const conexao = require('../infraestrutura/conexao')
const moment = require('moment');

 class Models
{

    tabela;
    caminho;


    adiciona(objeto, res){

        

      
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



    altera(id, valores, res)
    {
        const sql = 'UPDATE '+this.tabela+' SET ? WHERE id=?'
        this._Altera(id, sql, valores, res)

    }

    _Altera(id, sql, valores, res){

        const valor1 = valores[1]
        conexao.query(sql, [valores[1], id], (erro, resultados)=>{

            if (erro) {
                res.status(400).json({ 
                    message: 'usuário e/ou senha incorreta!'
                })
            } else {
                res.status(200).json({ 
                    'auth': 'logado',
                    ...valor1, 
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
                    id
                })
            }
        })
    }
}

module.exports = Models
