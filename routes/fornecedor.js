const Fornecedor = require('../models/fornecedor')
//const auth = require('../middlewares/auth')

/**
 * @module app
 * @param {*} app 
 */
module.exports = app => {

    /**
     * retorna dados de todos os fornecedores cadastrados atraves da rota /fornecedor
     */
    app.get('/fornecedor', (req, res)=> {
        Fornecedor.lista(res)
    })

    /**
     * retorna dados de um fornecedor cadastrado atraves da rota /fornecedor/:id
     */
    app.get('/fornecedor/:id', (req, res)=> {
        const id = parseInt(req.params.id)
        const valores = req.body
        Fornecedor.buscaPorId(id, res)
    })

    
    app.post('/fornecedor', (req, res)=> {
        console.log(req.body)
        const fornecedor = req.body
        Fornecedor.adiciona(fornecedor, res)
    })

    app.put('/fornecedor/:id', (req, res)=> {
        const id = parseInt(req.params.id)
        const valores = req.body
        Fornecedor.altera(id, valores, res)
    })

    app.patch('/fornecedor/:id', (req, res)=> {
        const id = parseInt(req.params.id)
        const valores = req.body
        Fornecedor.altera(id, valores, res)
    })

    app.delete('/fornecedor/:id', (req, res)=>{
        const id = parseInt(req.params.id)
        
        Fornecedor.deleta(id, res)
    })
}
