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
 /*sumArray = 0;
 for (let i = 0; i < numbers.length; i += 1) {
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
 sumArray = 0;
 for (let i = 0; i < numbers.length; i += 1) {
    sumArray = sumArray + numbers[i];
 }
 mediaArit = sumArray/numbers.length;
 if (mediaArit > 20) {
    console.log('valor maior que 20');
 } else {
     console.log('valor menor ou igual a 20');
 }
 //5
 