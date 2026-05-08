var dadosModel = require("../models/dadosModel");

function obterDados(req, res) {
    // var acertos = req.body.acertosServer;
    // var erros = req.body.errosServer;

    dadosModel.obterDados()
        .then(
            function (resultadoDados) {
                console.log(`\nResultados encontrados: ${resultadoDados.length}`);
                console.log(`Resultados: ${JSON.stringify(resultadoDados)}`); // transforma JSON em String

                if (resultadoDados.length > 0) {

                    // res.json({
                    //     acertos: resultadoDados[0].acertos,
                    //     erros: resultadoDados[0].erros
                    // });
                    res.json(resultadoDados);

                }
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}


// function cadastrar(req, res) {
//     // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
//     var nome = req.body.nomeServer;
//     var sobrenome = req.body.sobrenomeServer;
//     var email = req.body.emailServer;
//     var senha = req.body.senhaServer;

//     // Faça as validações dos valores
//     if (nome == undefined) {
//         res.status(400).send("Seu nome está undefined!");
//     } else if (sobrenome == undefined) {
//         res.status(400).send("Seu sobrenome está undefined!");
//     } else if (email == undefined) {
//         res.status(400).send("Seu email está undefined!");
//     } else if (senha == undefined) {
//         res.status(400).send("Sua senha está undefined!");
//     } else {

//         // Passe os valores como parâmetro e vá para o arquivo dadosModel.js
//         dadosModel.cadastrar(nome, sobrenome, email, senha)
//             .then(
//                 function (resultado) {
//                     res.json(resultado);
//                 }
//             ).catch(
//                 function (erro) {
//                     console.log(erro);
//                     console.log(
//                         "\nHouve um erro ao realizar o cadastro! Erro: ",
//                         erro.sqlMessage
//                     );
//                     res.status(500).json(erro.sqlMessage);
//                 }
//             );
//     }
// }

module.exports = {
    obterDados
}