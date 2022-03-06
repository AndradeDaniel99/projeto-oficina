const Order = require('../models/order')
const auth = require('../middlewares/auth')

module.exports = app => {
    app.get('/order', auth, (req, res)=> {
        Order.lista(Order.tabela, res)
    })

    app.get('/order/:id', auth, (req, res)=> {
        const id = parseInt(req.params.id)
        Order.buscaPorId(id, Order.tabela, res)
    })

    app.post('/order', auth, (req, res)=> {
        console.log(req.body)
        const order = req.body
        Order.adiciona(order, res)
    })

    app.put('/order/:id', auth, (req, res)=> {
        const id = parseInt(req.params.id)
        const valores = req.body
        Order.altera(id, valores, Order.tabela, res)
    })

    app.patch('/order/:id', auth, (req, res)=> {
        const id = parseInt(req.params.id)
        const valores = req.body
        Order.altera(id, valores, Order.tabela, res)
    })

    app.delete('/order/:id', auth, (req, res)=>{
        const id = parseInt(req.params.id)
        
        Order.deleta(id, Order.tabela, res)
    })




}
