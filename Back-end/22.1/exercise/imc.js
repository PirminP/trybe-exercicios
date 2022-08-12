// EXC 1
// EXC 2 .json

// const peso = 90; 
// const altura= 192; 

// function calculaImc(peso, altura) {
//   console.log(`Peso: ${peso}, Altura: ${altura}`);

//   const alturaEmMetros = altura / 100;
//   const alturaAoQuadrado = alturaEmMetros ** 2;

//   const imc = (peso / alturaAoQuadrado);
  
//   return imc;
// }

// // A função main é o ponto de partida do nosso programa 
// function main() {
//   const imc = calculaImc(peso, altura);

//   console.log(`IMC: ${imc.toFixed(2)}`);
// }

// main();


// EXC 3 & 4 & 5
const readline = require('readline-sync');

function calculaImc(peso, altura) {
  console.log(`Peso: ${peso}, Altura: ${altura}`);

  const alturaEmMetros = altura / 100;
  const alturaAoQuadrado = alturaEmMetros ** 2;

  const imc = (peso / alturaAoQuadrado);
  
  return imc;
}

function main() {
    // const peso = readline.questionInt('Qual o seu peso? (em kg)');
    const peso = readline.questionFloat('Qual o seu peso? (em kg)'); // EXC 4
    const altura = readline.questionInt('Qual a sua altura? (em cm)');
   
    const imc = calculaImc(peso, altura);
   
   console.log(`IMC: ${imc.toFixed(2)}`);

   if (imc < 18.5) { // EXC 5
    console.log('Situação: Abaixo do peso (magreza)');
    return;
  }

  if (imc >= 18.5 && imc < 25) {
    console.log('Situação: Peso normal');
    return;
  }

  if (imc >= 25 && imc < 30) {
    console.log('Situação: Acima do peso (sobrepeso)');
    return;
  }

  if (imc >= 30 && imc < 35) {
    console.log('Situação: Obesidade grau I');
    return;
  }

  if (imc >= 35 && imc < 40) {
    console.log('Situação: Obesidade grau II');
    return;
  }

  console.log('Situação: Obesidade graus III e IV');
 }
 
 main();