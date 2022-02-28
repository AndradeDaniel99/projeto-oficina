class Tabelas {

    init(conexao){
       this.conexao = conexao

       this.criarCarros() 
       this.criarClientes()
    }

    criarClientes(){
        const sql = 'CREATE TABLE IF NOT EXISTS `Oficina`.`Clientes` ( \
            `idClientes` INT NOT NULL AUTO_INCREMENT, \
            `nome` VARCHAR(45) NOT NULL, \
            `cpf` VARCHAR(45) NULL, \
            `cnpj` VARCHAR(45) NULL, \
            `telefone1` INT NULL, \
            `telefone2` INT NULL, \
            `telefone3` INT NULL, \
            `celular` INT NOT NULL, \
            `email` VARCHAR(45) NULL, \
            `endereco` VARCHAR(45) NULL ,\
            PRIMARY KEY (`idClientes`)); \
          '

        this.conexao.query(sql, erro => {
            if (erro) {
                console.log(erro)
            } else{
                console.log('Tabela Clientes criada com sucesso')
            }
        })
    }

    criarCarros(){
        const sql = 'CREATE TABLE IF NOT EXISTS `oficina`.`carros` (\
            `idCarros` INT NOT NULL,\
            `PLACA` VARCHAR(8) NOT NULL,\
            `ANO` YEAR(4) NULL,\
            `COR` VARCHAR(10) NULL,\
            `MARCA` VARCHAR(15) NULL,\
            `MODELO` VARCHAR(15) NULL,\
            PRIMARY KEY (`idCarros`))\
          ENGINE = InnoDB\
          DEFAULT CHARACTER SET = utf8;\
          '

        this.conexao.query(sql, erro => {
            if (erro) {
                console.log(erro)
            } else{
                console.log('Tabela Clientes criada com sucesso')
            }
        })
    }
}

module.exports = new Tabelas