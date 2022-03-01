/*const conexao = require('../infraestrutura/conexao')
const Models = require('../models/models')

export class Funcionalidade
{



    ler(modelo)
    {
        module.exports = app =>
        {
            
            app.get(modelo.Caminho, (req, res)=> 
            {
                modelo.lista(res)
            })

            app.get(modelo.Caminho + '/:id', (req, res)=> {
                const id = parseInt(req.params.id)
                const valores = req.body
                Cliente.buscaPorId(id, res)
            })

        }

    }

    Modifica()
    {

        module.exports = app => 
        {

            app.post(modelo.Caminho, (req, res)=> {
                console.log(req.body)
                const cliente = req.body
                Cliente.adiciona(cliente, res)
            })
        
            app.put(modelo.Caminho + '/:id', (req, res)=> {
                const id = parseInt(req.params.id)
                const valores = req.body
                Cliente.altera(id, valores, res)
            })
        
            app.delete(modelo.Caminho + '/:id', (req, res)=>{
                const id = parseInt(req.params.id)
                
                Cliente.deleta(id, res)
            })

        }            

    }

}     

module.exports = Funcionalidade*/