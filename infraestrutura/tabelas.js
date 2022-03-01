class Tabelas {

    init(conexao){
       this.conexao = conexao

       this.criarCarros() 
       this.criarClientes()
       this.criarFornecedor()
       this.criarProduto()
       this.criarEstoque()
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

    criarCarros(){
        const sql = 'CREATE TABLE IF NOT EXISTS `oficina`.`carros` (\
            `ID` INT NOT NULL AUTO_INCREMENT,\
            `PLACA` VARCHAR(8) NOT NULL,\
            `ANO` YEAR(4) NULL,\
            `COR` VARCHAR(10) NULL,\
            `MARCA` VARCHAR(15) NULL,\
            `MODELO` VARCHAR(15) NULL,\
            PRIMARY KEY (`ID`))\
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

    criarProduto(){
        
        const sql = 'CREATE TABLE IF NOT EXISTS `Oficina`.`produto` (\
            `id` INT NOT NULL AUTO_INCREMENT,\
            `nome` VARCHAR(45) NOT NULL,\
            `codigo_universal` VARCHAR(45) NULL,\
            `descricao` VARCHAR(45) NULL,\
            `info` VARCHAR(45) NULL,\
            `codigo_fabricante` VARCHAR(45) NULL,\
            `codigo_familia` VARCHAR(45) NULL,\
            `codigo_barras` VARCHAR(45) NULL,\
            `nome_familia` VARCHAR(45) NULL,\
            `ano` INT NULL,\
            `quantidade` INT NOT NULL,\
            `valor` FLOAT NOT NULL,\
            PRIMARY KEY (`id`));\
          '

        this.conexao.query(sql, erro => {
            if (erro) {
                console.log(erro)
            } else{
                console.log('Tabela de produto criada com sucesso')
            }
        })

    }

    criarOrder(){
        const sql = 'CREATE TABLE `Oficina`.`order` (\
            `id` INT NOT NULL AUTO_INCREMENT,\
            `idCarro` INT NULL,\
            `idCliente` INT NOT NULL,\
            `idProduto` INT NULL,\
            `idFuncionario` INT NOT NULL,\
            `situacao` VARCHAR(45) NULL,\
            `data_entrada` DATETIME NOT NULL,\
            `data_servico` DATETIME NOT NULL,\
            `obs_interna` VARCHAR(45) NULL,\
            `obs_cliente` VARCHAR(45) NOT NULL,\
            PRIMARY KEY (`id`));\
          '

        this.conexao.query(sql, erro => {
            if (erro) {
                console.log(erro)
            } else{
                console.log('Tabela de ordem de servico criada com sucesso')
            }
        })
    }

    criarEstoque(){
        const sql = 'CREATE TABLE `Oficina`.`estoque` (\
            `id` INT NOT NULL AUTO_INCREMENT,\
            `nomeProduto` VARCHAR(45) NOT NULL,\
            `nome_familia` VARCHAR(45) NOT NULL,\
            `codigo_universal` VARCHAR(45) NOT NULL,\
            `quantidade` INT NOT NULL,\
            `updatedAt` DATETIME NULL,\
            `createdAt` DATETIME NOT NULL,\
            `historico` JSON NULL,\
            PRIMARY KEY (`id`));\
          '
    }
}

module.exports = new Tabelas