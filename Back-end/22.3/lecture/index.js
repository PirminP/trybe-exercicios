const calculaSituacao = require('./calculaSituacao');

// console.log(calculaSituacao(4));

console.log('Quando a média for menor que 7, retorna "reprovacao":');

const respostaCenario1 = calculaSituacao(4);
if (respostaCenario1 === 'reprovacao') { // instead of reprovado!!
  console.log(`Ok 🚀`);
} else {
  console.error('Resposta não esperada 🚨');
}

console.log('Quando a média for maior que 7, retorna "aprovacao":');

const respostaCenario2 = calculaSituacao(9);
if (respostaCenario2 === 'aprovacao') {
  console.log(`Ok 🚀`);
} else {
  console.error('Resposta não esperada 🚨');
}

console.log('Quando a média for igual a 7, retorna "aprovacao":');

const respostaCenario3 = calculaSituacao(7);
if (respostaCenario3 === 'aprovacao') {
  console.log(`Ok 🚀`);
} else {
  console.error('Resposta não esperada 🚨');
}
