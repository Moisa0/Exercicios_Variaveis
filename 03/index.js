let valorTotal = 129.99;
let dinheiroAtual = 80;
valorDoDesconto = valorTotal - dinheiroAtual;

descontoEmPorcentagem = ((valorDoDesconto*100)/valorTotal).toFixed(1);

console.log(`Ele precisaria de ${descontoEmPorcentagem}% de desconto`);