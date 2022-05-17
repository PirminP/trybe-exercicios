/* eslint-disable no-unused-vars */
// arquivo onde a redux store é criada
// import { createStore, applyMiddleware } from 'redux';
// import thunk from 'redux-thunk';
// import reducer from '/path/to/your/root/reducer';

// const store = createStore(reducer, applyMiddleware(thunk));

// Para usar o redux-thunk junto com o Redux Devtools é preciso passar o
// applyMiddleware(thunk) como parâmetro para a função composeWithDevTools.
// arquivo onde a redux store é criada
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from '/path/to/your/root/reducer';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));
