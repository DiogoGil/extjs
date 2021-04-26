CREATE SCHEMA IF NOT EXISTS `cursoextjs4` DEFAULT CHARACTER SET utf8 COLLATE utf8_
USE `cursoextjs4`;

CREATE TABLE IF NOT EXISTS `cursoext`.`Contato`(
    `ID` INT NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(45) NOT NULL,
    `email` VARCHAR(45) NULL,
    PRIMARY KEY (`ID`)
)
ENGINE = InnoDB;

SET AUTOCOMMIT=0;
USE `cursoext`;
INSERT INTO `cursoext`.`Contato` (`ID`,`nome`,`email`) VALUES ('1','Gustavin','gustavin@gmail.com');
INSERT INTO `cursoext`.`Contato` (`ID`,`nome`,`email`) VALUES ('2','Marquin','marquin@gmail.com');
COMMIT;