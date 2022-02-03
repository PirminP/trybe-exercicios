//1
const a = 5;
const b = 3;

let sum = a + b;
console.log(sum);

let sub = a - b;
console.log(sub);

let multi = a * b;
console.log(multi);

let div = a / b;
console.log(div);

let modulo = a % b;
console.log(modulo);

//2
/*const num1 = 14;
const num2 = 18;
if(num1 > num2) {
    console.log(num1);
} else {
    console.log(num2);
}*/

//3
const num1 = 5;
const num2 = 4;
const num3 = 6;
if(num1 > num2 && num1 > num3) {
    console.log('num1 é maior de todos');
} 
else if(num2 > num1 && num2 > num3) {
    console.log('num2 é maior de todos');
} else {
    console.log('num3 é maior de todos');
}

//4
const zahl1 = 0;
if(zahl1 < 0) {
    console.log('negative');
} 
else if (zahl1 > 0) {
    console.log('positive');
} else {
    console.log('zero');
}

//5
const ang1 = 30;
const ang2 = -30;
const ang3 = -60;
sum = ang1 + ang2 + ang3;
const angTri = 180;
if(sum === angTri) {
    console.log('true')
} else if (sum < 0) {
    console.log('Error. Negative value!')
} else {
    console.log('false')
}