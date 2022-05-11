// importar o Redux
const Redux = require('redux');

// Agora vamos criar uma pequena store e vamos acessá-la, retornando o estado que 
// guardamos nela e criando uma action para alterá-lo.
// const store = Redux.createStore();

// const reducer = (state) => {
//   return state;
// };
    
// const store = Redux.createStore(reducer);

// Inicialmente o state vem como undefined, e não queremos isto.
// const reducer = (state = { login: false, email: "" }) => {
//   return state;
//   };
  
// const store = Redux.createStore(reducer);

// const ESTADO_INICIAL = {
//   login: false,
//   email: "",
// };
  
// const reducer = (state = ESTADO_INICIAL) => {
//   return state;
// };
  
// const store = Redux.createStore(reducer);

//Nosso reducer está montado e possui o nosso estado inicial da aplicação.
//Vamos verificar o output quando acessamos a store com a função getState().
const ESTADO_INICIAL = {
  login: false,
  email: "",
};

const reducer = (state = ESTADO_INICIAL) => {
  return state;
};

const store = Redux.createStore(reducer);

console.log(store.getState());

//{ login: false, email: '' }
