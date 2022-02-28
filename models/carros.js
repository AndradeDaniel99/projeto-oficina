const conexao = require('../infraestrutura/conexao')
const moment = require('moment')

class Carro{
    adiciona(carro, res){

        const sql = 'INSERT INTO oficina.Carros SET ?'

        conexao.query(sql, carro, (erro, resultados)=>{
            if (erro) {
                res.status(400).json(erro)
            } else{
                res.status(201).json({carro})
            }
        })
        
    }

    lista(res){
        const sql = 'SELECT * FROM Carros'

        conexao.query(sql, (erro, resultados)=>{
            if (erro) {
                res.status(400).json(erro)
            } else {
                res.status(200).json(resultados)
            }
        })
    }

    buscaPorId(id, res){
        const sql = 'SELECT * FROM Carros WHERE idCarros = ' + id
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

        const sql = 'UPDATE Carros SET ? WHERE idCarros=?'
        conexao.query(sql, [valores, id], (erro, resultados)=>{
            if (erro) {
                res.status(400).json(erro)
            } else {
                res.status(200).json({...valores, id})
            }
        })
    }

    deleta(id, res){
        const sql = 'DELETE FROM Carros WHERE idCarros = ?'

        conexao.query(sql, id, (erro, resultados)=>{
            if (erro) {
                res.status(400).json(erro)
            } else {
                res.status(200).json({id})
            }
        })
    }
}

module.exports = new Carro
