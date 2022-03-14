const Produto = require('../models/produto')
//const auth = require('../middlewares/auth')


module.exports = app => {
    app.get('/produto', (req, res)=> {
        Produto.lista(Produto.tabela, res)
    })

    app.get('/produto/:id', (req, res)=> {
        const id = parseInt(req.params.id)
        const valores = req.body
        Produto.buscaPorId(id, Produto.tabela, res)
    })

    app.post('/produto', (req, res)=> {
        console.log(req.body)
        const produto = req.body
        Produto.adiciona(produto, res)
    })

    app.put('/produto/:id', (req, res)=> {
        const id = parseInt(req.params.id)
        const valores = req.body
        Produto.altera(id, valores, res)
    })

    app.patch('/produto/:id', (req, res)=> {
        const id = parseInt(req.params.id)
        const valores = req.body
        Produto.altera(id, valores, res)
    })

    app.delete('/produto/:id', (req, res)=>{
        const id = parseInt(req.params.id)
        
        Produto.deleta(id, res)
    })
}