const conexao = require('../infraestrutura/conexao')
const moment = require('moment')
/*const contato = require ('./contato')*/
import { Contato } from "./contato.js"

class Cliente extends Contato{
    
    constructor()
    {
        this.TipoContato('clientes')

    }


}
module.exports = new Cliente()
