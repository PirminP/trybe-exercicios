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

const fazerLogin = (email) => ({
  type: "LOGIN",
  email});

const ESTADO_INICIAL = {
  login: false,
  email: "",
};

const reducer = (state = ESTADO_INICIAL, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        login: !state.login,
        email: action.email,
      };
    default: // No switch, sempre precisamos ter um caso default!
      return state;
  }
};

const store = Redux.createStore(reducer);

store.dispatch(fazerLogin("alguem@email.com"));

console.log(store.getState());

// { login: true, email: 'alguem@email.com' }



// Combinando Reducers

import { combineReducers } from 'redux';
import meuReducer from './meuReducer';
import meuOutroReducer from './meuOutroReducer';

const reducerCombinado = combineReducers({
meuReducer,
meuOutroReducer});

export default reducerCombinado;


import { createStore } from 'redux';
// Importando o reducer combinado que fizemos logo acima
import reducerCombinado from './reducers/index';

const store = createStore(reducerCombinado);
// console.log(store.getState())
store.subscribe(() => {
  console.log(store.getState());
});

//{
// meuReducer: {/_estado do meuReducer_/},
// meuOutroReducer: {/_estado do meuOutroReducer_/,}
//}

