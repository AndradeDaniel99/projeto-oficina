const Cliente = require('../models/cliente')
const auth = require('../middlewares/auth')

module.exports = app => {
    app.get('/cliente', auth, (req, res)=> {
        console.log(req.body[1])
        Cliente.lista(res)
    })

    app.get('/cliente/:id', auth, (req, res)=> {
        const id = parseInt(req.params.id)
        const valores = req.body
        Cliente.buscaPorId(id, res)
    })

    app.post('/cliente', auth, (req, res)=> {
        console.log(req.body[1])
        const cliente = req.body
        Cliente.adiciona(cliente, res)
    })

    app.put('/cliente/:id', auth, (req, res)=> {
        const id = parseInt(req.params.id)
        const valores = req.body[1]
        Cliente.altera(id, valores, res)
    })

    app.patch('/cliente/:id', auth, (req, res)=> {
        const id = parseInt(req.params.id)
        const valores = req.body[1]
        Cliente.altera(id, valores, res)
    })

    app.delete('/cliente/:id', auth, (req, res)=>{
        const id = parseInt(req.params.id)
        console.log(req.body)
        Cliente.deleta(id, res)
    })
}
