// Array.find
const numbers = [19, 21, 30, 3, 45, 22, 15];

const verifyEven = (number) => number % 2 === 0;

const isEven = numbers.find(verifyEven);

console.log(isEven); // 30

console.log(verifyEven(9)); // False
console.log(verifyEven(14)); // True

// Outra forma de ser realizada sem a necessidade de criar uma nova função.
const isEven2 = numbers.find((number) => number % 2 === 0);

console.log(isEven2); // 30

// Exercise 1
const numbers = [19, 21, 30, 3, 45, 22, 15];

const findDivisibleBy3And5 = () => {
  const div3and5 = (number) => number %3 === 0 && number %5 === 0;
  return numbers.find(div3and5);
}

console.log(findDivisibleBy3And5())


// Exercise 2
const names = ['João', 'Irene', 'Fernando', 'Maria'];

const findNameWithFiveLetters = () => {
  const found5letter = (name) => name.length === 5;
  return names.find(found5letter);
}

console.log(findNameWithFiveLetters());


// Exercise 3
const musicas = [
    { id: '31031685', title: 'Partita in C moll BWV 997' },
    { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
    { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
  ]

  function findMusic(id) {
    const findId = (music) => music.id === id;
    return musicas.find(findId);
  }

  console.log(findMusic('31031685'))