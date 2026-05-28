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
('Pedro', 'Lima', 'pedro@gmail.com', 'aa'),
('Naju', 'Barbosa', 'naju@gmail.com', 'aa'),
('Dayvid', 'José', 'dayvid@gmail.com', 'senha123'),
('Lucas', 'Veneroso', 'veneroso@gmail.com', 'veneroso'),
('David', 'Lima', 'david@gmail.com', '12345');

INSERT INTO quiz (fkUsuario, acertos, erros, pontuacao) VALUES 
(1, 14, 4, 22),
(1, 9, 9, 15),
(1, 12, 6, 19),
(1, 16, 2, 24),
(1, 18, 0, 30);

INSERT INTO quiz (fkUsuario, acertos, erros, pontuacao) VALUES 
(2, 13, 5, 21),
(3, 8, 10, 13),
(4, 11, 7, 18),
(5, 15, 3, 25),
(2, 15, 3, 27);

SELECT * FROM usuario;
SELECT * FROM quiz;

SELECT AVG(acertos) FROM quiz WHERE fkUsuario = 1;

SELECT ROUND(AVG(acertos), 2) FROM quiz;

-- TRUNCATE usuario;
-- TRUNCATE quiz; 

-- DROP TABLE usuario;
-- DROP TABLE quiz; 

-- DROP DATABASE ProjetoIndividual; 

SELECT AVG(acertos), COUNT(idQuiz), nome, sobrenome, MAX(pontuacao) AS pontuacao FROM usuario JOIN quiz ON id = fkUsuario 
	GROUP BY nome, sobrenome ORDER BY pontuacao DESC LIMIT 5;
    
SELECT nome, MAX(pontuacao) AS pontuacao FROM usuario JOIN quiz ON id = fkUsuario 
	GROUP BY nome ORDER BY pontuacao DESC;

SELECT fkUsuario, acertos, erros, pontuacao FROM quiz WHERE fkUsuario = 1 ORDER BY idQuiz ASC;
