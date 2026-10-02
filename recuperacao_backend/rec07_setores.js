// EXERCÍCIO 07 - Lista de setores da fábrica Nível 4 10 pts
// Objetivo: Cadastrar e percorrer dados armazenados em um array.
// Crie um programa para cadastrar seis setores de uma fábrica e, ao final, listar todos os setores
// numerados.
// O programa deve:
// ☐ Criar um array vazio.
// ☐ Usar um laço para solicitar 6 nomes de setores.
// ☐ Adicionar cada nome ao array usando push().
// ☐ Percorrer o array novamente após o cadastro.
// ☐ Exibir no formato "1 - Montagem", "2 - Qualidade" etc.
// ☐ Usar a propriedade length em pelo menos um dos laços.

const entrada = require("readline-sync");

const setores = [];

for (let i = 0; i < 6; i++) {
    const setor = entrada.question(`Digite o nome do setor ${i + 1}: `);
    setores.push(setor);
}

console.log("\n== SETORES CADASTRADOS ==");

for (let i = 0; i < setores.length; i++) {
    console.log(`${i + 1} - ${setores[i]}`);
}