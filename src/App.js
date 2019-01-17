import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h2> Prueba ~ Coophi </h2>
        </header>
        <body className="App-body">
          <section className="list-items">
            <p> Aqui van el listado</p>
          </section>
          <section className="info-items">
            <p> Aqui va la descripción </p>
          </section>
        </body>
      </div>
    );
  }
}

export default App;
