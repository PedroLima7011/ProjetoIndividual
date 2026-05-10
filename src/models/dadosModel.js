var database = require("../database/config")

function obterDados(id) {
    var instrucaoSql = `
       SELECT fkUsuario, acertos, erros, pontuacao FROM quiz WHERE fkUsuario = '${id}' ORDER BY idQuiz ASC;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function obterDadosRanking() {
    var instrucaoSql = `
        SELECT AVG(acertos) AS mediaGeral, COUNT(idQuiz) AS quantidade, nome, MAX(pontuacao) AS pontuacao FROM usuario 
            JOIN quiz ON id = fkUsuario 
        GROUP BY nome ORDER BY pontuacao DESC;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

// Coloque os mesmos parâmetros aqui. Vá para a var instrucaoSql
function inserirDados(id, acertos, erros, pontuacao) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", id, acertos, erros, pontuacao);

    var instrucaoSql = `
        INSERT INTO quiz (fkUsuario, acertos, erros, pontuacao) VALUES ('${id}', '${acertos}', '${erros}', '${pontuacao}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    obterDados,
    inserirDados,
    obterDadosRanking
};