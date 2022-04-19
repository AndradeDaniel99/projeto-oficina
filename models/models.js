const conexao = require('../infraestrutura/conexao')
const moment = require('moment');

/**
 * classe pai que representa os modelos mais usados pelas outras classes
 */
 class Models
{

    tabela;
    caminho;

    /**
     * adiciona um objeto a uma tabela mysql
     * @param {*} objeto 
     * @param {*} res 
     */
    adiciona(objeto, res){

            const sql = 'INSERT INTO Oficina.'+this.tabela + ' SET ' + objeto

            //const object = objeto[1]

            /**
             * faz a conexao com o bd mysql
             */
            conexao.query(sql, (erro, resultados)=>{
                if (erro) {
                    res.status(400).json({ 
                        'message': 'usuário e/ou senha incorreta!',
                        erro
                    })
                } else{
                    res.status(200).json({ 
                        resultados
                    })
                }
            })
        
    }

    /**
     * lista os objetos em uma tabela mysql
     * @param {*} res 
     */
    lista(res){
        const sql = 'SELECT * FROM Oficina.'+this.tabela+";"

        /**
        * faz a conexao com o bd mysql
        */
        conexao.query(sql, (erro, resultados)=>{
            if (erro) {
                res.status(400).json({ 
                    message: 'usuário e/ou senha incorreta!',
                    valores
                })
            } else {
                res.status(200).json({ 
                    resultados
                })
            }
        })
    }

    /**
     * busca um objeto por ID em uma tabela mysql
     */
    buscaPorId(id, res){

        const sql = 'SELECT * FROM Oficina.'+this.tabela + ' WHERE id = ' + id

        /**
         * faz a conexao com o bd mysql
         */
        conexao.query(sql, (erro, resultados)=>{
            if (erro) {
                res.status(400).json({ 
                    message: 'usuário e/ou senha incorreta!'
                })
            } else {
                res.status(200).json({ 
                    resultados
                })
            }
        })
    }


    /**
     * altera valores de um objeto em uma tabela mysql
     * @param {number} id 
     * @param {*} valores 
     * @param {*} res 
     */
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

    /**
     * deleta um objeto de uma tabela mysql de acordo com seu ID
     * @param {*} id 
     * @param {*} res 
     */
    deleta(id, res){
        const sql = 'DELETE FROM Oficina.'+this.tabela+ ' WHERE id = ' + id

        /**
         * conecta com o bd mysql
         */
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

    /**
     * Retorna o ID de um objeto em uma tabela mysql
     * @param {JSON} json 
     */
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

/**
 * nome do modulo
 */
module.exports = Models
