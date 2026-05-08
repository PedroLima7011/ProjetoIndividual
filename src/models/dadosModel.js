var database = require("../database/config")

function obterDados(acertos, erros) {
    var instrucaoSql = `
       SELECT fkUsuario, acertos, erros FROM quiz WHERE fkUsuario = 1 ORDER BY idQuiz DESC LIMIT 5;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

// Coloque os mesmos parâmetros aqui. Vá para a var instrucaoSql
// function inserirDados(fkUsuario, acertos, erros, pontuacao) {
//     console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nome, sobrenome, email, senha);

//     // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
//     //  e na ordem de inserção dos dados.
//     var instrucaoSql = `
//         INSERT INTO usuario (nome, sobrenome, email, senha) VALUES ('${nome}', '${sobrenome}', '${email}', '${senha}');
//     `;
//     console.log("Executando a instrução SQL: \n" + instrucaoSql);
//     return database.executar(instrucaoSql);
// }

module.exports = {
    obterDados
    // inserirDados
};