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
        const cliente = req.body
        Cliente.adiciona(cliente, res)
    })

    app.put('/cliente/:id', (req, res)=> {
        const id = parseInt(req.params.id)
        const valores = req.body
        Cliente.altera(id, valores, res)
    })

    app.delete('/cliente/:id', (req, res)=>{
        const id = parseInt(req.params.id)
        
        Cliente.deleta(id, res)
    })
}
