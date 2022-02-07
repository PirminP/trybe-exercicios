//lecture exercise
let fruits = [3, 4, 10, 1, 12];
let sum = 0;
for(let i =0; i < fruits.length; i += 1){
    sum = sum + fruits[i];
}
if (sum > 15) {
    console.log (sum);
} /*else if (sum <= 15){
    console.log('valor menor que 16')
}*/ //Maneira mais facil, boa pratica:
    else {
        console.log('valor menor que 16');
    }

//Exercicios
//1
let fatorial = 1;
for (let i = 10; i > 0; i -= 1) {
  fatorial = fatorial * i;
}
console.log(fatorial);

//2
//algorithm reverse word: https://levelup.gitconnected.com/javascript-algorithm-reverse-words-9ddae3a3ba39
let word = 'Sarah';
let invert = '';
invert = word.split("").reverse().join("");
console.log(invert);

//3
let array = ['java', 'javascript', 'python', 'html', 'css'];
let bigWord = array[0];
let smallWord = array[0];

for (i = 0; i < array.length; i += 1){
    if (array[i].length > bigWord.length)
    bigWord = array[i];
}
for (i = 0; i < array.length; i += 1){
    if (array[i].length < smallWord.length)
    smallWord = array[i];
}

console.log(bigWord);
console.log(smallWord);

//4
let number = 50;
let div = 0;
let numberOdd = [];

for (let i =1; i <= number; i+=1) {
    div = 0;
  for (let x = 1; x <= i; x+=1){
      if (i % x == 0){
          div+=1;
      }    
  }
  if (div == 2) {
    numberOdd.push(i)
  }
}
console.log ('Valores Primos =', numberOdd);
console.log ('Maior valor primo=', numberOdd[numberOdd.length-1]);