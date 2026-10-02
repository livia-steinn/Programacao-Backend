// EXERCÍCIO 09 - Cálculo de aproveitamento de
// matéria-prima Nível 5 14 pts
// Objetivo: Organizar regras do programa em funções com parâmetros e retorno.
// Uma indústria deseja calcular o percentual de aproveitamento de matéria-prima. O aproveitamento é
// calculado por (quantidade útil / quantidade total) × 100.
// O programa deve:
// ☐ Criar a função calcularAproveitamento(util, total) que retorne o percentual.
// ☐ Criar a função classificarAproveitamento(percentual).
// ☐ Classificação: 90% ou mais = "EXCELENTE"; de 75% a 89,99% = "ADEQUADO"; abaixo de 75% =
// "REVISAR PROCESSO".
// ☐ Solicitar quantidade total e quantidade útil pelo terminal.
// ☐ Chamar as duas funções.
// ☐ Exibir total, quantidade útil, percentual e classificação.


const entrada = require("readline-sync");

function calcularAproveitamento( util, total) {
    return (util / total) * 100;
}

function classificarAproveitamento(percentual) {
    if (percentual >= 90) {
        return "EXCELENTE";
    } else if (percentual >= 75) {
        return "ADEQUADO";
    } else {
        return "REVISAR PROCESSO";
    }
}

const QuantidadeUtil = entrada.questionFloat("Quantidade util: ");
const QuantidadeTotal = entrada.questionFloat("Quantidade total: ");


const aproveitamento = calcularAproveitamento(QuantidadeUtil, QuantidadeTotal);
const classificacao = classificarAproveitamento(aproveitamento);

console.log("\n=== RELATÓRIO DE APROVEITAMENTO ===");
console.log(`Quantidade útil: ${QuantidadeUtil}`);
console.log(`Quantidade total: ${QuantidadeTotal}`);
console.log(`Aproveitamento: ${aproveitamento.toFixed(2)}%`);
console.log(`Classificação: ${classificacao}`);