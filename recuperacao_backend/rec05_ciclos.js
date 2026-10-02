// EXERCÍCIO 05 - Projeção de produção por ciclo Nível 3 10 pts
// Objetivo: Utilizar laço de repetição para gerar uma sequência de resultados.
// Uma esteira produz uma quantidade fixa de produtos por ciclo. O supervisor quer visualizar a produção
// acumulada dos ciclos 1 até 12.
// O programa deve:
// ☐ Solicitar quantos produtos são produzidos por ciclo.
// ☐ Usar um laço for de 1 até 12.
// ☐ Exibir, em cada ciclo, o número do ciclo e a produção acumulada.
// ☐ Não escrever manualmente as doze linhas.

const entrada = require('readline-sync');

const produtosPorCiclo = entrada.questionInt("Quantas produtos a esteira produz por ciclo? ");

for (let i = 1; i <= 12; i++) {
    const totalProdutos = produtosPorCiclo * i;
    console.log(`Ciclo ${i}: ${totalProdutos} produtos`);
}