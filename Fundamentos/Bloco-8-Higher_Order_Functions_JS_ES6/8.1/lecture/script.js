// First Class Function
// Function to variabel
function sum (number1, number2) {
    return number1 + number2;
  }
  
  const sumVariable = sum;
  
  console.log(sumVariable);
  //  [Function: sum]

  const sum = (number1, number2) => {
    return number1 + number2;
  };

// Passar funções como argumento para outras funções
  const sayHello = () => {
    return ('hello trybers');
  }
  
  const printGreeting = (callback) => {
      console.log(callback());
  }
  
  printGreeting(sayHello);

  // Retornar uma função de outra função:
  const sumFixAmount = (amount) => {
    return (number) => amount + number;
  }
  
  const initialSum = sumFixAmount(15)
  console.log(initialSum(5));


  // Higher Order Functions
  const button = document.querySelector('#signup-button');

  const registerUser = () => {
  console.log('Registrado com sucesso!');
  };

  button.addEventListener('click', registerUser);

  // Estruturando uma HOF
  const repeat = (number, action) => {
    for (let count = 0; count <= number; count += 1) {
      action(count);
    }
  };
  
  repeat(5, console.log);


  const repeat = (number, action) => {
    for (let count = 0; count <= number; count += 1) {
      action(count);
    }
  };
  
  repeat(3, (number) => {
    if (number % 2 === 0) {
      console.log(number, 'is even');
    }
  });

  const numberGenerator = () => {
    return Math.random() * 100;
  }
  
  console.log(numberGenerator());