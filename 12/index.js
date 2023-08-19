let capital = 60000;
let montante = 90000;
let tempo = 24;

taxaDeJuros = ((Math.pow (montante/capital, 1/tempo) -1)*100).toFixed(3);

console.log(`O seu financiamento de ${capital} teve uma taxa de juros de ${taxaDeJuros}%, pois após ${tempo} meses você teve que pagar ${montante}`);