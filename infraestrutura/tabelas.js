class Tabelas {

    init(conexao){
       this.conexao = conexao

       this.criarCarros() 
       this.criarClientes()
       this.criarFornecedor()
    }

    criarClientes(){
        const sql = 'CREATE TABLE IF NOT EXISTS `Oficina`.`Clientes` ( \
            `ID` INT NOT NULL AUTO_INCREMENT, \
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

    // comentario
    criarCarros(){
        const sql = 'CREATE TABLE IF NOT EXISTS `oficina`.`carros` (\
            `ID` INT NOT NULL AUTO_INCREMENT,\
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
                console.log('Tabela de Carros criada com sucesso')
            }
        })
    }

    criarFornecedor(){
        const sql = 'CREATE TABLE IF NOT EXISTS `Oficina`.`fornecedor` (  \
            `id` INT NOT NULL AUTO_INCREMENT,  \
            `nome` VARCHAR(45) NOT NULL, \
            `cnpj` VARCHAR(45) NOT NULL,\
            `nome_fantasia` VARCHAR(45) NOT NULL,\
            `razao_social` VARCHAR(45) NOT NULL,\
            `telefone1` VARCHAR(45) NULL,\
            `telefone2` VARCHAR(45) NULL,\
            `celular` VARCHAR(45) NULL,\
            `endereco` VARCHAR(45) NULL,\
            `email` VARCHAR(45) NULL,\
            PRIMARY KEY (`id`));'
          

        this.conexao.query(sql, erro => {
            if (erro) {
                console.log(erro)
            } else{
                console.log('Tabela de fornecedor criada com sucesso')
            }
        })
    }
}

module.exports = new Tabelas