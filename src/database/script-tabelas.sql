-- Arquivo de apoio, caso você queira criar tabelas como as aqui criadas para a API funcionar.
-- Você precisa executar os comandos no banco de dados para criar as tabelas,
-- ter este arquivo aqui não significa que a tabela em seu BD estará como abaixo!

/*
comandos para mysql server
*/

CREATE DATABASE ProjetoIndividual;
USE ProjetoIndividual;

CREATE TABLE usuario (
	id INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50),
	sobrenome VARCHAR(50),
	email VARCHAR(50),
	senha VARCHAR(50)
);

CREATE TABLE quiz (
	idQuiz INT AUTO_INCREMENT,
	fkUsuario INT,
    acertos INT,
	erros INT,
	pontuacao INT,
	CONSTRAINT pkQuiz PRIMARY KEY (idQuiz, fkUsuario),
	CONSTRAINT chFkUsuario FOREIGN KEY (fkUsuario)
		REFERENCES usuario (id)
);

INSERT INTO quiz (fkUsuario, acertos, erros, pontuacao) VALUES 
(1, 8, 5, 10),
(1, 4, 9, 10),
(1, 5, 5, 10),
(1, 5, 8, 10),
(1, 5, 5, 10);

SELECT * FROM usuario;
SELECT * FROM quiz;

TRUNCATE usuario;
