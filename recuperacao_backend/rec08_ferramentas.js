// EXERCÍCIO 08 - Controle de ferramentas Nível 4 12 pts
// Objetivo: Integrar objetos, arrays, repetição e condição.
// Um almoxarifado precisa cadastrar quatro ferramentas. Cada ferramenta possui nome, quantidade
// disponível e quantidade mínima.
// O programa deve:
// ☐ Criar um array vazio para armazenar as ferramentas.
// ☐ Cadastrar 4 ferramentas usando um laço.
// ☐ Criar um objeto para cada ferramenta com nome, quantidade e minimo.
// ☐ Adicionar cada objeto ao array com push().
// ☐ Percorrer o array após o cadastro.
// ☐ Quando quantidade < minimo, exibir "REPOR".
// ☐ Caso contrário, exibir "ESTOQUE SUFICIENTE".
// ☐ Apresentar nome, quantidade, mínimo e situação de cada ferramenta.

const entrada = require('readline-sync');

const ferramentas = [];

for (let i = 1; i <= 4; i++) {
  const nome = entrada.question(`Nome da ferramenta ${i}: `);
  const quantidade = entrada.questionInt('Quantidade atual: ');
  const estoqueMinimo = entrada.questionInt('Estoque minimo: ');

  const informacoes = {
    nome,
    quantidade,
    estoqueMinimo
  };
  ferramentas.push(informacoes);
}

for (let i = 0; i < ferramentas.length; i++) {
  const ferramenta = ferramentas[i];
  let estoque;
  if (ferramenta.quantidade < ferramenta.estoqueMinimo) {
    estoque = 'REPOR ESTOQUE';
  } else {
    estoque = 'ESTOQUE SUFICIENTE';
  }
  console.log(`=== Relatorio ===`);
  console.log(`Nome ferramenta: ${ferramenta.nome}`);
  console.log(`Quantidade: ${ferramenta.quantidade}`);
  console.log(`Estoque minimo: ${ferramenta.estoqueMinimo}`);
  console.log(`Situacao do estoque: ${estoque}`);
}