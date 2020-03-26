import React from 'react';
//import React, { useState } from 'react';

import './global.css';

//import Header from './Header';
import Routes from './routes';
/*
function App() {
  const [counter, setCounter] = useState(0);
  //Arrau [valor, FunçãoDeAtualização]

  function increment(){
    setCounter(counter + 1);
  }

  return (
     * v1 = <h1>Semana OmniStack 11.0</h1>
     * 
     * v2 = <Header />
     * 
     * v3 = <Header  title="Semana OmniStack 11.0"/> //Mandando atributos
     * 
     * v4 = <Header>Semana OmniStack</Header>
     
    
    <div>
      <Header>Contador: {counter}</Header>
      <button onClick={increment}>Incrementar</button>
    </div>
  );
*/
function App() {
  return (
    <Routes />
  );
}

export default App;
