// EXERCÍCIO 01 - Produção diária de embalagens Nível 1 - 6 pts
// Objetivo: Revisar variáveis, operações matemáticas e saída de dados.
// Uma máquina de embalagem produz uma quantidade fixa de caixas por hora. Crie um programa que
// calcule quantas caixas serão produzidas durante um dia de trabalho.
// O programa deve:
// ☐ Criar uma variável para a quantidade de caixas produzidas por hora.
// ☐ Criar uma variável para a quantidade de horas trabalhadas no dia.
// ☐ Calcular a produção total.
// ☐ Exibir uma frase informando caixas por hora, horas trabalhadas e total produzido.

const CaixasPorHora = 75;
const HorasTrabalhadas = 8;
const TotalProduzido = CaixasPorHora * HorasTrabalhadas;

console.log(`Caixas produzidas por hora: ${CaixasPorHora}`);
console.log(`Horas trabalhadas: ${HorasTrabalhadas}`);
console.log(`Total de caixas produzidas: ${TotalProduzido}`);