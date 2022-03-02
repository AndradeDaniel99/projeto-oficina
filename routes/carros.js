const Carro = require('../models/carros')

module.exports = app => {
    app.get('/veiculo', (req, res)=> {
        Carro.lista(Carro.tabela, res)
    })

    app.get('/veiculo/:id', (req, res)=> {
        const id = parseInt(req.params.id)
        Carro.buscaPorId(id, Carro.tabela, res)
    })

    app.post('/veiculo', (req, res)=> {
        console.log(req.body)
        const carro = req.body
        Carro.adiciona(carro, res)
    })

    app.put('/veiculo/:id', (req, res)=> {
        const id = parseInt(req.params.id)
        const valores = req.body
        Carro.altera(id, valores, Carro.tabela, res)
    })

    app.patch('/veiculo/:id', (req, res)=> {
        const id = parseInt(req.params.id)
        const valores = req.body
        Carro.altera(id, valores, Carro.tabela, res)
    })

    app.delete('/veiculo/:id', (req, res)=>{
        const id = parseInt(req.params.id)
        
        Carro.deleta(id, Carro.tabela, res)
    })
}