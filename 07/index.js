let populacaoInicialPessoasInfectadas = 1000;
let pacienteInfectadoPodeTransmitir = 4;
let tempoPercorrido = 100;

P = (populacaoInicialPessoasInfectadas*Math.pow(pacienteInfectadoPodeTransmitir, tempoPercorrido/7)).toFixed(0);

console.log(`Após ${tempoPercorrido} dias ${P} pessoas estarão infectadas`);