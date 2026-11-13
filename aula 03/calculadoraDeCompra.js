// calculadora de compra - Atividade Pratica 01
// 1) Declaração das variáveis
const preço =39.90;     // Preço do produto (R$)
const quantidade =3;   // Quantidade a ser comprada
const taxaDesconto = 0.10;  // Desconto de 10% (10/100)

// 2) Cálculos
const total = preço * quantidade;  // Total da compra
const desconto = total * taxaDesconto;  // Valor do desconto (10%)
const valorFINAL = total - desconto;   // Valor final a pagar

// 3) Exibição dos  resultados
console.log("preço do produto: R$ " + preço.toFixed(2));
console.log("Quantidade:" +  quantidade);
console.log("Valor total: R$ " + total.toFixed(2));
console.log("Desconto (10%): R$ "+ desconto.toFixed(2));
console.log("Valor final a pagar: R4 "+ valorFINAL.toFixed(2));

