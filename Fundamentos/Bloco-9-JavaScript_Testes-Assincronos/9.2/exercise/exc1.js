// Exercise 1 fetch
// 1) O endereço para o qual a requisição será feita, ou seja, a url do serviço.
// 2) Um objeto contendo as especificações da requisição. Para essa API ,
//    atribuiremos a esse objeto as chaves method e headers

// apiScript.js     
const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = () => {
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };

  fetch(API_URL, myObject)
    .then(response => response.json())
    .then(data => console.log(data)); //return object on html webpage console
};

window.onload = () => fetchJoke();
