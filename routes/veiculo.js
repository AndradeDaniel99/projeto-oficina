const Veiculo = require('../models/veiculo')
//const auth = require('../middlewares/auth')

module.exports = app => {
    app.get('/veiculo', (req, res)=> {
        Veiculo.lista(res)
    })

    app.get('/veiculo/:id', (req, res)=> {
        const id = parseInt(req.params.id)
        Veiculo.buscaPorId(id, res)
    })

    app.post('/veiculo', (req, res)=> {
        console.log(req.body)
        const veiculo = req.body
        Veiculo.adiciona(veiculo, res)
    })

    app.put('/veiculo/:id', (req, res)=> {
        const id = parseInt(req.params.id)
        const valores = req.body
        Veiculo.altera(id, valores, res)
    })

    app.patch('/veiculo/:id', (req, res)=> {
        const id = parseInt(req.params.id)
        const valores = req.body
        Veiculo.altera(id, valores, res)
    })

    app.delete('/veiculo/:id', (req, res)=>{
        const id = parseInt(req.params.id)
        
        Veiculo.deleta(id, res)
    })
}