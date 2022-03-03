const Produto = require('../models/produto')
const auth = require('../middlewares/auth')


module.exports = app => {
    app.get('/produto', auth, (req, res)=> {
        Produto.lista(Produto.tabela, res)
    })

    app.get('/produto/:id', auth, (req, res)=> {
        const id = parseInt(req.params.id)
        const valores = req.body
        Produto.buscaPorId(id, Produto.tabela, res)
    })

    app.post('/produto', auth, (req, res)=> {
        console.log(req.body)
        const produto = req.body
        Produto.adiciona(produto, res)
    })

    app.put('/produto/:id', auth, (req, res)=> {
        const id = parseInt(req.params.id)
        const valores = req.body
        Produto.altera(id, valores, res)
    })

    app.patch('/produto/:id', auth, (req, res)=> {
        const id = parseInt(req.params.id)
        const valores = req.body
        Produto.altera(id, valores, res)
    })

    app.delete('/produto/:id', auth, (req, res)=>{
        const id = parseInt(req.params.id)
        
        Produto.deleta(id, res)
    })
}