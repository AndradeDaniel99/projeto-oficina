const Estoque = require('../models/estoque')
//const auth = require('../middlewares/auth')

module.exports = app => {
    app.get('/estoque', (req, res)=> {
        Estoque.lista(res)
    })

    app.get('/estoque/:id', (req, res)=> {
        const id = parseInt(req.params.id)
        const valores = req.body
        Estoque.buscaPorId(id, res)
    })

    app.post('/estoque', (req, res)=> {
        console.log(req.body)
        const produto = req.body
        Estoque.adiciona(produto, res)
    })

    app.put('/estoque/:id', (req, res)=> {
        const id = parseInt(req.params.id)
        const valores = req.body
        Estoque.altera(id, valores, res)
    })

    app.patch('/estoque/:id', (req, res)=> {
        const id = parseInt(req.params.id)
        const valores = req.body
        Estoque.altera(id, valores, res)
    })

    app.delete('/estoque/:id', (req, res)=>{
        const id = parseInt(req.params.id)
        
        Estoque.deleta(id, res)
    })
}
