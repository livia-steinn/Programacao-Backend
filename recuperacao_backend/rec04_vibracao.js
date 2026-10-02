// EXERCÍCIO 04 - Classificação de vibração Nível 2 8 pts
// Objetivo: Utilizar if, else if e else em uma regra de negócio.
// Um sensor mede o nível de vibração de um equipamento em mm/s.
// O programa deve:
// ☐ Até 3 mm/s: situação ESTÁVEL.
// ☐ Acima de 3 até 6 mm/s: situação ATENÇÃO.
// ☐ Acima de 6 mm/s: situação CRÍTICA.
// ☐ Solicitar o valor da vibração pelo terminal.
// ☐ Exibir o valor informado e a classificação.

const entrada = require("readline-sync");

const nivelVibracao = entrada.questionFloat("Digite o nivel de vibracao em mm/s: ");

if (nivelVibracao <= 3) {
    console.log("situacao: ESTAVEL");
} else if (nivelVibracao <= 6) {
    console.log("situacao: ATENCAO");
} else {
    console.log("situacao: CRITICA");
}
console.log(`Nivel de vibracao: ${nivelVibracao} mm/s`);