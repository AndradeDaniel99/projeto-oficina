const Order = require('../models/order')

module.exports = app => {
    app.get('/order', (req, res)=> {
        Order.lista(res)
    })

    app.get('/Order/:id', (req, res)=> {
        const id = parseInt(req.params.id)
        const valores = req.body
        Order.buscaPorId(id, res)
    })

    app.post('/order', (req, res)=> {
        console.log(req.body)
        const order = req.body
        Order.adiciona(order, res)
    })

    app.put('/order/:id', (req, res)=> {
        const id = parseInt(req.params.id)
        const valores = req.body
        Order.altera(id, valores, res)
    })

    app.delete('/order/:id', (req, res)=>{
        const id = parseInt(req.params.id)
        
        Order.deleta(id, res)
    })
}
