import React, {Component} from 'react';


import Content from './global/Content';
import Header from './global/Header';

 class App extends Component{
   render(){
    return (
      <div className="App">
        <Header appName="Calculadora" />
        <Content />
      </div>
      );
  }
}

export default App;
