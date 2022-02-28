const Cliente = require('../models/cliente')

module.exports = app => {
    app.get('/cliente', (req, res)=> {
        Cliente.lista(res)
    })

    app.get('/cliente/:id', (req, res)=> {
        const id = parseInt(req.params.idCliente)
        const valores = req.body
        Cliente.buscaPorId(id, res)
    })

    app.post('/cliente', (req, res)=> {
        console.log(req.body)
        const Cliente = req.body
        Cliente.adiciona(Cliente, res)
    })

    app.patch('/cliente/:id', (req, res)=> {
        const id = parseInt(req.params.id)
        const valores = req.body
        Cliente.altera(id, valores, res)
    })

    app.delete('/cliente/:id', (req, res)=>{
        const id = parseInt(req.params.idClientes)
        
        Cliente.deleta(id, res)
    })
}