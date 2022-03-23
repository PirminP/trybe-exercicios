// Fetch API

// const fetch = require('node-fetch');

// const fetchJoke = () => {
//   const url = 'https://api.chucknorris.io/jokes/random?category=dev';

//   console.log(fetch(url)); // Promise pending: inicial execution (return estado)
// }

// fetchJoke();

// Fetch API with control .then() and error .catch()
// const fetch = require('node-fetch');

// const fetchJoke = () => {
//   const url = 'https://api.chucknorris.io/jokes/random?category=dev';

//   fetch(url)
//     .then((response) => response.json())
//     .then((data) => console.log(data.value))
//     .catch((error) => console.log(`Algo deu errado :( \n${error}`));
// }

// fetchJoke();


// Vamos ver o que acontece no código acima.
// A função fetchJoke chama o fetch que é executado e após sua execução, 
// caso a requisição seja bem sucedida, retorna para o parâmetro da função do 
// primeiro .then() uma resposta e na sua execução iremos pegar a versão JSON dessa resposta por meio da função
//  .json() . Note que a função .json() também é assíncrona, por isso temos o segundo .then() que, por sua vez,
// vai pegar o JSON vindo do primeiro .then() e dentro dele acessar o elogio que esta armazenado no campo value para mostrar no console.


// Async w/o Await
// const fetch = require('node-fetch');

// const fetchJoke = async () => { //async before definition of function
//   const url = 'https://api.chucknorris.io/jokes/random?category=dev';

//   fetch(url)
//     .then((response) => response.json())
//     .then((data) => console.log(data.value))
//     .catch((error) => console.log(`Algo deu errado :( \n${error}`));
// }

// fetchJoke();

// Async together with Await (1. option w then/catch)
// const fetch = require('node-fetch');

// const fetchJoke = async () => {
//   const url = 'https://api.chucknorris.io/jokes/random?category=dev';

//   const result = await fetch(url)
//     .then((response) => response.json())
//     .then((data) => data.value)
//     .catch((error) => `Algo deu errado :( \n${error}`);
  
//   console.log(result);
// };

// fetchJoke();

// Usando o await , a fetchJoke espera o fetch terminar toda sua execução
// (até o último .then() ou .catch() ) para só depois executar o console.log()


// Async together with Await (2. option w/o then/catch)
const fetch = require('node-fetch');

const fetchJoke = async () => {
  const url = 'https://api.chucknorris.io/jokes/random?category=dev';

  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data.value);
  } catch(error) {
    console.log(`Algo deu errado :( \n${error}`);
  }
}

fetchJoke();

// Chuck Norris can write multi-threaded applications with a single thread.
