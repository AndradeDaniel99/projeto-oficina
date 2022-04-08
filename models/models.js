const conexao = require('../infraestrutura/conexao')
const moment = require('moment');

 class Models
{

    tabela;
    caminho;





    adiciona(objeto, res){

        

      
            const sql = 'INSERT INTO Oficina.'+this.tabela + ' SET ?'

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
        const sql = 'SELECT * FROM Oficina.'+this.tabela+";"

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
        const sql = 'SELECT * FROM Oficina.'+this.tabela + ' WHERE id = ' + id
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
        const sql = 'UPDATE Oficina.'+this.tabela+' SET ? WHERE id=?'
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
        const sql = 'DELETE FROM Oficina.'+this.tabela+ ' WHERE id = ' + id

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

    getId(json){

        let Buscador = Object.keys(json)[0];
        let valor = json[Buscador];

        const sql = "SELECT ID As idCliente FROM "+ this.tabela + " WHERE "+ Buscador + " = "+ valor + ";"
        
        // ADD CONEXÃO
        conexao.query(sql, (erro, resultados)=>{
            if (erro) {
                res.status(400).json({ 
                    message: 'usuário e/ou senha incorreta!'
                })
            } else {
                res.status(200).json({ 
                    'auth': 'logado'
                })
            }
        })



    }




}

module.exports = Models
