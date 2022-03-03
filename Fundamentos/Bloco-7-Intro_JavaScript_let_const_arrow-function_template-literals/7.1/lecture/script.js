// Part 1 - var, let e const
// function userInfo() {
//     const userEmail = 'maria@email.com';
  
//     // Toda expressão dentro do escopo da função userInfo tem acesso à variável userEmail
//   }
//   userInfo();
//   console.log(userEmail);

//   if (true) {
//     // inicio do escopo do if
//     var userAge = '20';
//     console.log(userAge); // 20
//     // fim do escopo do if
//   }
//   console.log(userAge); // 20

// const userName = 'Isabella';
// const userName = 'Lucas';
// console.log(userName); // Resultado: Lucas using var:overwriting

const favoriteLanguage = 'Javascript';
favoriteLanguage = 'Python';
console.log(favoriteLanguage); // Erro

let favoriteTechnology = 'Machine learning';
favoriteTechnology = 'Facial recognition';
console.log(favoriteTechnology); // Facial recognition

// Parte 2 - template literals
// const myName = 'Isabella';
// console.log('Hello' + ' ' + myName + '!');

const myName = 'Isabella';
console.log(`Hello ${myName}!`); // template literals

// Com o template literals
console.log(`Primeira linha;
Segunda linha;
Terceira linha;`
);

// Sem o template literals:
console.log('Primeira linha;\n' + 'Segunda linha;\n' + 'Terceira linha;\n');


// Part 3 - arrow functions
const printName = function () {
    const myName = 'Lucas';
    return myName;
};
console.log(printName());

// arrow function
const printName = () => {
    const myName = 'Sarah';
    return myName;
};
  
console.log(printName()); 

const printName = () => 'Sarah';
console.log(printName());

const multiplication = (number, multi) => number * multi;
console.log(multiplication(8, 2));

// Part 4 - ternary operator
// A sintaxe básica do operador ternário é muito simples:
`expressão verdadeira ou falsa` ? `retorno se verdadeira` : `retorno se falsa`;

// Assim, por exemplo, podemos ter expressões com a seguinte estrutura:
const trueExpression = (1 + 1 === 2) ? `isso é verdade` : `isso é mentira`;
console.log(trueExpression); // isso é verdade

const falseExpression = (2 + 2 === 3) ? `isso é verdade` : `isso é mentira`;
console.log(falseExpression); // isso é mentira

// Situação em que é mais simples usar o operador ternário:
const checkIfElse = (age) => {
    if (age >= 18) {
      return `Você tem idade para dirigir!`;
    } else {
      return `Você ainda não tem idade para dirigir...`;
    }
  };
  
  const checkTernary = (age) => (
    age >= 18 ? `Você tem idade para dirigir!` : `Você ainda não tem idade para dirigir...`;
  );
  
  // ------------------------
  
  // Situação em que usar o operador ternário não faz muito sentido:
  const checkIfElse = (fruit) => {
    if (fruit === `maçã`) {
      return `Essa fruta é vermelha`;
    } else if (fruit === `banana`) {
      return `Esta fruta é amarela`;
    } else {
      return `Não sei a cor`;
    }
  };
  
  const checkTernary = (fruit === `maçã`) ? `Essa fruta é vermelha` 
    : ((fruit === `banana`) ? `Esta fruta é amarela` : `Não sei a cor`);
  
  // Aninhar operadores  ternários, como no exemplo acima, não é uma boa prática,
  // pois torna o seu código truncado e difícil de ler, tirando todo o sentido de um
  // operador cujo objetivo é facilitar a sua vida e a da pessoa que lerá seu código
  // no futuro!


