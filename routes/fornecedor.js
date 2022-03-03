const Fornecedor = require('../models/fornecedor')
const auth = require('../middlewares/auth')


module.exports = app => {
    app.get('/fornecedor', auth, (req, res)=> {
        Fornecedor.lista(res)
    })

    app.get('/fornecedor/:id', auth, (req, res)=> {
        const id = parseInt(req.params.id)
        const valores = req.body
        Fornecedor.buscaPorId(id, res)
    })

    app.post('/fornecedor', auth, (req, res)=> {
        console.log(req.body)
        const fornecedor = req.body
        Fornecedor.adiciona(fornecedor, res)
    })

    app.put('/fornecedor/:id', auth, (req, res)=> {
        const id = parseInt(req.params.id)
        const valores = req.body
        Fornecedor.altera(id, valores, res)
    })

    app.patch('/fornecedor/:id', auth, (req, res)=> {
        const id = parseInt(req.params.id)
        const valores = req.body
        Fornecedor.altera(id, valores, res)
    })

    app.delete('/fornecedor/:id', auth, (req, res)=>{
        const id = parseInt(req.params.id)
        
        Fornecedor.deleta(id, res)
    })
}
