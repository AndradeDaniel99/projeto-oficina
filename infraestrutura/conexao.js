const mysql = require('mysql2')

const conexao = mysql.createConnection({
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: 'NAUO1145**',
    database: 'oficina'
})

module.exports = conexao