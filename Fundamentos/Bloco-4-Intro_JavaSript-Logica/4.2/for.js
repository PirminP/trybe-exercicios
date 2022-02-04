//lecture
/*let cars = ['Saab', 'Volvo', 'BMW'];
for (let i =0; i < cars.length; i += 1){
    console.log(cars[i]);
}*/

// Exercise array and for loops
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

//1 
console.log(numbers);

 //2 
 /*for (let i = 0; i < numbers.length; i += 1) {
    sumArray = sumArray + numbers[i];
 }
 console.log(sumArray);*/

 //3
 /*sumArray = 0;
 for (let i = 0; i < numbers.length; i += 1) {
    sumArray = sumArray + numbers[i];valor menor ou igual a 20"
 }
 console.log(sumArray/numbers.length);*/

 //4
 /*sumArray = 0;
 for (let i = 0; i < numbers.length; i += 1) {
    sumArray = sumArray + numbers[i];
 }
 mediaArit = sumArray/numbers.length;
 if (mediaArit > 20) {
    console.log('valor maior que 20');
 } else {
     console.log('valor menor ou igual a 20');
 }*/

 //5
 /*let higherNumber = numbers[0];
 for (let i = 1; i < numbers.length; i += 1) {
    if(numbers[i] > higherNumber) {
       higherNumber = numbers[i];
    }
 }
 console.log(higherNumber);*/

//6
let impar = 0;
for (let i = 0; i < numbers.length; i += 1) {
    if(numbers[i] %2 !== 0) {
       impar = impar + 1;
    } 
    else if (impar === 0) {
      console.log('nenhum valor ímpar encontrado');  
    }
 }
 console.log(impar);