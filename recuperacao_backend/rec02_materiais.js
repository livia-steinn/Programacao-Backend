// EXERCÍCIO 02 - Custo de materiais para manutenção Nível 1 8 pts
// Objetivo: Trabalhar com entrada de dados e cálculos numéricos.
// Uma equipe de manutenção precisa calcular o custo de um lote de peças de reposição.
// O programa deve:
// ☐ Importar a biblioteca readline-sync.
// ☐ Solicitar o nome da peça.
// ☐ Solicitar a quantidade comprada.
// ☐ Solicitar o preço unitário.
// ☐ Calcular o valor total da compra.
// ☐ Exibir um resumo contendo nome, quantidade, preço unitário e total.

const entrada = require("readline-sync");

const nomePeca = entrada.question("Digite o nome da peca: ");
const quantidade = entrada.questionInt("Digite a quantidade comprada: ");
const precoUnitario = entrada.questionFloat("Digite o preco unitario: ");
const valorTotal = quantidade * precoUnitario;

console.log(`\n=== RELATORIO DE COMPRA ===`);
console.log(`Peca: ${nomePeca}`);
console.log(`Quantidade: ${quantidade}`);
console.log(`Preco unitario: R$ ${precoUnitario.toFixed(2)}`);
console.log(`Valor total: R$ ${valorTotal.toFixed(2)}`);