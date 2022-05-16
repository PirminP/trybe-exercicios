const INITIAL_STATE = {
    state: '',
  };
  
  function myReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
      case 'NEW_ACTION':
        return { state: action.state };
         // Nesse caso a utilização do spread operator (...) não é necessário, pois estamos trabalhando com uma única chave no estado.
      default:
        return state;
    }
  }
  
  export default myReducer;
