let pesoDaPessoa = 76;
let alturaDaPessoa = 1.79;

Imc = (pesoDaPessoa/Math.pow(alturaDaPessoa, 2)).toFixed(2);

console.log(`Seu IMC é de ${Imc}. Consulte uma tabela e saiba mais sobre sua saúde.`);