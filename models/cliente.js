const conexao = require('../infraestrutura/conexao')
const Models = require('./models')



 class Cliente extends Models{
    

    tabela = 'clientes'
    caminho = '/cliente'

    lista(tabela, res){
        const sql = 'SELECT * FROM '+tabela

        conexao.query(sql, (erro, resultados)=>{
            if (erro) {
                res.status(400).json({ 
                    message: 'usuário e/ou senha incorreta!'
                })
            } else {
                res.status(200).json({ 
                    message: 'Você foi logado com sucesso!',
                    resultados
                })
            }
        })
    }
}
module.exports = new Cliente()
