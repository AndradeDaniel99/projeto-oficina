const Estoque = require('../models/estoque')
//const auth = require('../middlewares/auth')

/**
 * @module app
 * @param {*} app 
 */
module.exports = app => {

    /**
     * retorna dados de todos os produtos cadastrados no estoque atraves da rota /estoque
     */
    app.get('/estoque', (req, res)=> {
        Estoque.lista(res)
    })

    /**
     * retorna dados de um produto cadastrado no estoque atraves da rota /estoque/:id
     */
    app.get('/estoque/:id', (req, res)=> {
        const id = parseInt(req.params.id)
        const valores = req.body
        Estoque.buscaPorId(id, res)
    })

    /**
     * recebe dados de um produto e salva no estoque atraves da rota /estoque
     */
    app.post('/estoque', (req, res)=> {
        console.log(req.body)
        const produto = req.body
        Estoque.adiciona(produto, res)
    })

    /**
     * recebe novos dados de um produto e salva as alteracoes no bd mysql atraves da rota /estoque/:id
     */
    app.put('/estoque/:id', (req, res)=> {
        const id = parseInt(req.params.id)
        const valores = req.body
        Estoque.altera(id, valores, res)
    })

    /**
     * recebe novos dados de um produto e salva as alteracoes no bd mysql atraves da rota /estoque/:id
     */
    app.patch('/estoque/:id', (req, res)=> {
        const id = parseInt(req.params.id)
        const valores = req.body
        Estoque.altera(id, valores, res)
    })

    /**
     * deleta um produto do estoque atraves da rota /estoque/:id
     */
    app.delete('/estoque/:id', (req, res)=>{
        const id = parseInt(req.params.id)
        
        Estoque.deleta(id, res)
    })
}
