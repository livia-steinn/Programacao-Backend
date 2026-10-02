// EXERCÍCIO 10 - Sistema modular de orçamento
// técnico Nível 5 14 pts
// Objetivo: Separar regras de negócio em um módulo e utilizá-las no programa principal.
// Uma assistência técnica precisa calcular o orçamento de um serviço utilizando dois arquivos JavaScript.
// O programa deve:
// ☐ Criar uma pasta chamada rec10_orcamento.
// ☐ Criar o arquivo funcoesOrcamento.js.
// ☐ Criar calcularMaoDeObra(horas), considerando R$ 95,00 por hora.
// ☐ Criar calcularTotal(valorMateriais, horas), somando materiais e mão de obra.
// ☐ Criar verificarDesconto(total), retornando "DESCONTO DE 10%" quando total >= R$ 1000,00 e "SEM
// DESCONTO" nos demais casos.
// ☐ Exportar as funções com module.exports.
// ☐ Criar o arquivo app.js.
// ☐ No app.js, importar readline-sync e o módulo com require().
// ☐ Solicitar nome do cliente, valor dos materiais e horas de serviço.
// ☐ Exibir relatório com cliente, materiais, mão de obra, total e situação do desconto.

function calcularMaoDeObra(horas) {
    return horas * 95;
}

function calcularTotal(valorMateriais, horas) {
    const maoDeObra = calcularMaoDeObra(horas);
    return valorMateriais + maoDeObra;
}

function verificarDesconto(total) {
    if (total >= 1000) {
        return "DESCONTO DE 10%";
    } else {
        return "SEM DESCONTO";
    }
}

module.exports = {
    calcularMaoDeObra,
    calcularTotal,
    verificarDesconto
};