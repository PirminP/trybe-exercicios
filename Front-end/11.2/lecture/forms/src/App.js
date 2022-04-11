// import React, { Component } from 'react'

// class Form extends Component {
//   constructor() {
//     super();

//     this.handleChange = this.handleChange.bind(this);

//     this.state = {
//       estadoFavorito: '',
//     };
//   }


//   // handleChange(event) {
//   //   this.setState({
//   //     estadoFavorito: event.target.value,
//   //   });
//   // }

//   // event handler:
//   handleChange({ target }) {
//     const { name } = target;
//     const value = target.type === 'checkbox' ? target.checked : target.value;
  
//     this.setState({
//       [name]: value,
//     });
//   }

//   render() {
//     return (
//       <div>
//         <h1>Estados e React - Tecnologia fantástica ou reagindo a regionalismos?</h1>
//         <form className="form">
//           <label>
//             Diga qual o seu Estado favorito! De React ou do Brasil, você decide! =)
//               <textarea name="estadoFavorito" value={this.state.estadoFavorito} onChange={this.handleChange} />
//           </label>
//           <input
//             type="number"
//             name="idade"
//           />
//           <input
//             type="checkbox"
//             name="vaiComparecer"
//           />
//         </form>
//       </div>
//     );
//   }
// }

// export default Form;


// Transfer info componente filho par componente pai
import React from 'react';

class Button extends React.Component {
  render() {
    /* A função que altera o estado do componente pai chega
       ao componente filho via `props`! */
    const { handleClick } = this.props;

    return (<button type="button" onClick={handleClick} >Contar clique!</button>);
  }
}

class App extends React.Component {
  constructor() {
    super();

    this.handleClick = this.handleClick.bind(this);

    // O componente pai é o dono do estado!
    this.state = {
      numeroDeCliques: 0,
    };
  }

  /* A função de alterar o estado é definida no componente pai*/
  handleClick() {
    this.setState((estadoAnterior) => ({
      numeroDeCliques: estadoAnterior.numeroDeCliques + 1,
    }));
  }

  /* O componente filho recebe a função de alterar estado do pai via `props`,
     na forma de uma callback */
  render() {
    return (
      <div>
        <h1>{`${this.state.numeroDeCliques} cliques!`}</h1>
        <Button handleClick={this.handleClick} />
      </div>
    );
  }
}

//Export
export default App