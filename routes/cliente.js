const Cliente = require('../models/cliente')
const auth = require('../middlewares/auth')

module.exports = app => {
    app.get('/cliente', auth, (req, res)=> {
        Cliente.lista(Cliente.tabela, res)
    })

    app.get('/cliente/:id', (req, res)=> {
        const id = parseInt(req.params.id)
        const valores = req.body
        Cliente.buscaPorId(id, Cliente.tabela, res)
    })

    app.post('/cliente', (req, res)=> {
        console.log(req.body)
        const cliente = req.body
        Cliente.adiciona(cliente, res)
    })

    app.put('/cliente/:id', (req, res)=> {
        const id = parseInt(req.params.id)
        const valores = req.body
        Cliente.altera(id, valores, Cliente.tabela, res)
    })

    app.patch('/cliente/:id', (req, res)=> {
        const id = parseInt(req.params.id)
        const valores = req.body
        Cliente.altera(id, valores, Cliente.tabela, res)
    })

    app.delete('/cliente/:id', (req, res)=>{
        const id = parseInt(req.params.id)
        
        Cliente.deleta(id, Cliente.tabela, res)
    })
}