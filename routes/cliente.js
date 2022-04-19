const Cliente = require('../models/cliente')
//const auth = require('../middlewares/auth')

/**
 * @module app
 * @param {*} app 
 */
module.exports = app => {

    /**
     * retorna dados de todos os clientes cadastrados atraves da rota /cliente
     */
    app.get('/cliente', (req, res)=> {
        //console.log(req.body[1])
        Cliente.lista(res)
    })

    /**
     * retorna dados de um cliente de acordo com o ID atraves da rota /cliente/:id
     */
    app.get('/cliente/:id', (req, res)=> {
        const id = parseInt(req.params.id)
        const valores = req.body
        Cliente.buscaPorId(id, res)
    })

    /**
     * recebe dados de um cliente e adiciona no bd mysql atraves da rota /cliente
     */
    app.post('/cliente', (req, res)=> {
        console.log(req.body)
        const cliente = req.body
        Cliente.adiciona(cliente, res)
    })

    /**
     * recebe novos dados de cliente e salva no bd mysql atraves da rota /cliente/:id
     */
    app.put('/cliente/:id', (req, res)=> {
        const id = parseInt(req.params.id)
        const valores = req.body[1]
        Cliente.altera(id, valores, res)
    })

    /**
     * recebe novos dados de cliente e salva no bd mysql atraves da rota /cliente/:id
     */
    app.patch('/cliente/:id', (req, res)=> {
        const id = parseInt(req.params.id)
        const valores = req.body[1]
        Cliente.altera(id, valores, res)
    })

    /**
     * recebe um ID de cliente e deleta do bd mysql atraves da rota /cliente/:id
     */
    app.delete('/cliente/:id', (req, res)=>{
        const id = parseInt(req.params.id)
        console.log(req.body)
        Cliente.deleta(id, res)
    })
}
