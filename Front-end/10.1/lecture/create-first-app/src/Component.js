import React from "react";

class Component extends React.Component {
  render() {
    return <div> 
        <h1>My name is Pedro Salinas</h1> 
        <p>I am 31 years old and I am very proud of my wife and daughter!!!</p>
      </div>
  }
}

export default Component

// 3 Na pasta src , crie um arquivo chamado Component.js crie um componente que retorne um <h1> com o seu nome um paragráfo, <p> , com uma breve descrição sobre você.
// 4 Importe seu componente em App.js de modo que ele seja renderizado na tela quando a aplicação for iniciada, npm start . --> export default utilizado quando queremos exportar apenas um elemento de um arquivo