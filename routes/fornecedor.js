const Fornecedor = require('../models/fornecedor')

module.exports = app => {
    app.get('/fornecedor', (req, res)=> {
        Fornecedor.lista(Fornecedor.tabela, res)
    })

    app.get('/fornecedor/:id', (req, res)=> {
        const id = parseInt(req.params.id)
        const valores = req.body
        Fornecedor.buscaPorId(id, Fornecedor.tabela, res)
    })

    app.post('/fornecedor', (req, res)=> {
        console.log(req.body)
        const fornecedor = req.body
        Fornecedor.adiciona(fornecedor, res)
    })

    app.put('/fornecedor/:id', (req, res)=> {
        const id = parseInt(req.params.id)
        const valores = req.body
        Fornecedor.altera(id, valores, Fornecedor.tabela, res)
    })

    app.patch('/fornecedor/:id', (req, res)=> {
        const id = parseInt(req.params.id)
        const valores = req.body
        Fornecedor.altera(id, valores, Fornecedor.tabela, res)
    })

    app.delete('/fornecedor/:id', (req, res)=>{
        const id = parseInt(req.params.id)
        
        Fornecedor.deleta(id, Fornecedor.tabela, res)
    })
}
