// Acessando uma função nossa dentro da classe

// import React from 'react';
// import './App.css';

// class App extends React.Component {
//   handleClick() {
//     console.log('Clicou!')
//   }

//   render() {
//     return <button type="button" onClick={this.handleClick}>Meu botão</button>;
//   }
// }

// export default App;

// Constructor
// import React from 'react';
// import './App.css';

// class App extends React.Component {
//   constructor(props) {
//     // A função `super()` é chamada para garantir que a lógica interna do React rode **antes** da sua. Se não for assim, o código não funcionará
//     super()
//     // console.log(props);
//     // Sua lógica extra vai aqui! O parâmetro `props` é opcional, para você acessar as props diretamente no construtor
//   }

//   render() {
//     return <span>Meu componente!</span>
//   }
// }

// export default App;

// this
// import React from 'react';
// import './App.css';

// class App extends React.Component {
//   render() {
//     console.log(this)
//     return <span>Hello, world!</span>
//   }
// }

// export default App;

// Problem of this
// import React from 'react';
// import './App.css';

// class App extends React.Component {
//   handleClick() {
//     // Essa chamada ao `this` retorna `undefined`? !
//     console.log(this)
//     console.log('Clicou')
//   }

//   render() {
//     // Já essa chamada ao `this`, feita de dentro da função `render`, retorna o objeto que esperamos
//     console.log(this)
//     return <button onClick={this.handleClick}>Meu botão</button>
//   }
// }

// export default App;

// Connect this with constructor() to combine with function
import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super()
    // A função abaixo vincula "manualmente" o `this` à nossa função
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    /* Agora esse log retorna o objeto `this`, já acessível para nossa função!
    Com isso, podemos acessar as `props`, estado do componente (ainda vamos ver como!)
    e tudo o mais daqui de dentro */
    console.log(this)
    console.log('Clicou!')
  }

  render() {
    return <button onClick={this.handleClick}>Meu botão</button>
  }
}

export default App;