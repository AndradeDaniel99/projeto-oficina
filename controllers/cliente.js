const Atendimento = require('../models/cliente')

module.exports = app => {
    app.get('/cliente', (req, res)=> {
        Atendimento.lista(res)
    })

    app.get('/cliente/:id', (req, res)=> {
        const id = parseInt(req.params.id)
        const valores = req.body
        Atendimento.buscaPorId(id, res)
    })

    app.post('/cliente', (req, res)=> {
        console.log(req.body)
        const atendimento = req.body
        Atendimento.adiciona(atendimento, res)
    })

    app.patch('/cliente/:id', (req, res)=> {
        const id = parseInt(req.params.id)
        const valores = req.body
        Atendimento.altera(id, valores, res)
    })

    app.delete('/cliente/:id', (req, res)=>{
        const id = parseInt(req.params.id)
        
        Atendimento.deleta(id, res)
    })
}