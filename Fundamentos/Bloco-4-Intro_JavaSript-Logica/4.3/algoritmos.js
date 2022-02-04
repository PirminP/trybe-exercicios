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