let capital = 1000;
let tempoEmMeses = 5;
let taxaFixaDeJurosEmPorcentagem = 12.5;

let montante = (capital*Math.pow((1 + (taxaFixaDeJurosEmPorcentagem/100)), tempoEmMeses)).toFixed(2);

console.log(`O seu atual montante de dinheiro ou dívida é de ${montante} reais`)