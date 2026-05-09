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

INSERT INTO usuario (nome, sobrenome, email, senha) VALUES 
('Arthur', 'Lima', 'arthur@gmail.com', 'aa'),
('Sema', 'Lima', 'sema@gmail.com', 'aa'),
('Souza', 'Barbosa', 'lima@gmail.com', 'aa');

INSERT INTO quiz (fkUsuario, acertos, erros, pontuacao) VALUES 
(1, 10, 10, 10),
(1, 4, 9, 10),
(1, 5, 5, 10),
(1, 5, 8, 10),
(1, 5, 5, 10);
INSERT INTO quiz (fkUsuario, acertos, erros, pontuacao) VALUES 
(1, 10, 10, 10),
(1, 9, 9, 10),
(1, 8, 5, 10),
(1, 7, 8, 10),
(1, 6, 5, 10);

INSERT INTO quiz (fkUsuario, acertos, erros, pontuacao) VALUES 
(4, 10, 10, 9),
(3, 4, 9, 9),
(5, 5, 5, 9),
(6, 5, 8, 11),
(2, 5, 5, 10);

SELECT * FROM usuario;
SELECT * FROM quiz;

SELECT AVG(acertos) FROM quiz WHERE fkUsuario = 1;
SELECT ROUND(AVG(acertos), 2) FROM quiz;

TRUNCATE usuario;
TRUNCATE quiz;

DROP TABLE usuario;
DROP TABLE quiz;

SELECT nome, MAX(pontuacao) AS pontuacao FROM usuario JOIN quiz ON id = fkUsuario 
	GROUP BY nome ORDER BY pontuacao DESC LIMIT 5;
SELECT nome, MAX(pontuacao) AS pontuacao FROM usuario JOIN quiz ON id = fkUsuario 
	GROUP BY nome ORDER BY pontuacao DESC;

