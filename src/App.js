import React, { Component } from 'react';
import ItemList from './components/ItemList/ItemList';
import ItemDescription from './components/ItemDescription/ItemDescription';
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
            <ItemList/>
          </section>
          <section className="info-items">
            <ItemDescription/>
          </section>
        </body>
      </div>
    );
  }
}

export default App;
