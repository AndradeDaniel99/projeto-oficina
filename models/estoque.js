const conexao = require('../infraestrutura/conexao')
const Models = require('./models.js')
const moment = require('moment')


 class Estoque extends Models {
    tabela = 'estoque'
    caminho = '/estoque'

    adiciona(produto, res){

        const createdAt = moment().format('YYYY-MM-DD HH:MM:SS')
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
            const sql = 'INSERT INTO estoque SET ?'

            conexao.query(sql, {...produto, createdAt}, (erro, resultados)=>{
                if (erro) {
                    res.status(400).json(erro)
                } else{
                    res.status(201).json({produto})
                }
            })
        }
    }

}

module.exports = new Estoque()