/**
 * @module infraestrutura/conexao
 */

const mysql = require('mysql2')

/**
 * cria conexao com o banco de dados mysql
 */
const conexao = mysql.createConnection({
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: '12345678',
    database: 'oficina'
})
/**
 * o nome do modulo
 */
module.exports = conexao