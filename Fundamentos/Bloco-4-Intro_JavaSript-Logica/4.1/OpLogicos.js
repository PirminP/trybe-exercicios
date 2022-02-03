//Lecture AND
const comida = 'pão na chap';
const bebida = 'cafézinho';

if (bebida === 'cafézinho' && comida === 'pão na chapa') {
  console.log('Muito obrigado pela refeição :)');
} else {
  console.log('Acho que houve um engano com meu pedido');
}

const conditionOne = true;
const conditionTwo = false;

console.log(conditionOne && conditionTwo);

//Exercise AND
const currentHour = 5;
let message = '';

if (currentHour >= 22) {
    message = 'Não deveríamos comer nada, é hora de dormir'
} else if (currentHour >= 18 && currentHour < 22) {
    message = 'Rango da noite, vamos jantar :D'
} else if (currentHour >= 14 && currentHour < 18) {
    message = 'Vamos fazer um bolo pro café da tarde?'
} else if (currentHour >= 11 && currentHour < 14) {
    message = 'Hora do almoço!!!'
} else if (currentHour >= 4 && currentHour < 11) {
    message = 'Hmmm, cheiro de café recém passado'
}
console.log(message);

//Lecture OR
const bebidaPrincipal =  'cafezinho';
const bebidaAlternativa = 'suco de laranja';

if (bebidaPrincipal === 'cafezinho' || bebidaAlternativa === 'suco de laranja') {
  console.log("Obrigado por me atender :D");
} else {
  console.log("Ei, eu não pedi isso!");
}
//Exerciser OR
let weekDay = 'quinta'
if (weekDay === 'sabado' || weekDay === 'domingo') {
    console.log('FINALMENTE, descanso merecido UwU');
} else if (weekDay === 'segunda-feira' || weekDay === 'terça-feira' || 
            weekDay === 'quarta-feira' || weekDay === 'quinta-feira' || weekDay === 'sexta-feira'){
    console.log('Oba, mais um dia de aprendizado na Trybe >:D');
} else {
    console.log ('Nao existe esse dia ainda!')
}

//Lecture NOT
console.log((2 + 2) === 4);
console.log(!(2 + 2) === 4);