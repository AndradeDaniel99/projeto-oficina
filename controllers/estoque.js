const Estoque = require('../models/estoque')

module.exports = app => {
    app.get('/estoque', (req, res)=> {
        Estoque.lista(Estoque.tabela, res)
    })

    app.get('/estoque/:id', (req, res)=> {
        const id = parseInt(req.params.id)
        const valores = req.body
        Estoque.buscaPorId(id, Estoque.tabela, res)
    })

    app.post('/estoque', (req, res)=> {
        console.log(req.body)
        const produto = req.body
        Estoque.adiciona(produto, res)
    })

    app.put('/estoque/:id', (req, res)=> {
        const id = parseInt(req.params.id)
        const valores = req.body
        Estoque.altera(id, valores, Estoque.tabela, res)
    })

    app.patch('/estoque/:id', (req, res)=> {
        const id = parseInt(req.params.id)
        const valores = req.body
        Estoque.altera(id, valores, Estoque.tabela, res)
    })

    app.delete('/estoque/:id', (req, res)=>{
        const id = parseInt(req.params.id)
        
        Estoque.deleta(id, Estoque.tabela, res)
    })
}
