-- Arquivo de apoio, caso você queira criar tabelas como as aqui criadas para a API funcionar.
-- Você precisa executar os comandos no banco de dados para criar as tabelas,
-- ter este arquivo aqui não significa que a tabela em seu BD estará como abaixo!

/* para workbench - local - desenvolvimento */
CREATE DATABASE websoccer;

USE websoccer;

CREATE TABLE usuario (
	id INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50),
	email VARCHAR(50),
	senha VARCHAR(50),
	pontuacao INT,
	qtdAcertos INT,
	qtdErros INT
);

-- CREATE TABLE pontuacao (
-- 	idPnts INT PRIMARY KEY AUTO_INCREMENT,
-- 	pontuacao INT,
-- 	qtdAcertos INT,
-- 	qtdErros INT,
-- 	fkIdUsuario INT,
-- 	FOREIGN KEY(fkIdUsuario) REFERENCES usuario(id)
-- )

/* para sql server - remoto - produção */

CREATE TABLE usuario (
	id INT PRIMARY KEY IDENTITY(1,1),
	nome VARCHAR(50),
	email VARCHAR(50),
	senha VARCHAR(50),
);


