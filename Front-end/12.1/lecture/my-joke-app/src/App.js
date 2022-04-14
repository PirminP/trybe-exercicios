/* eslint-disable no-undef */
import React from 'react';
import DadJoke from './components/DadJoke';
import Joke from './components/Joke';

class App extends React.Component {
  constructor() {
    super();
    render()
      return (
        <div>
          <Joke />
          <DadJoke />
        </div>

      );
    };
}

export default App;