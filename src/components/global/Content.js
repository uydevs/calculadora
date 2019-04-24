import React, {Component} from 'react';
import '../../css/Content.css';
import { string } from 'postcss-selector-parser';
import {calculate} from '../../services/Functions.js'

 class Content extends Component{
  
  constructor(){
    super();
    this.state={
      number1: 0,
      number2: 0,
      idOperation: "",
      result: 0,
    };
  }

  handleOperationClick = (event) => {
    this.setState({
      idOperation: event.target.id,
    });
  }
    
  handleChangeNumber = (event) => {
    let number = event.target.value;
    if(number === ""){
      number = 0;
    }

    if(event.target.id === "num1"){
      this.setState({
        number1:number,
      });
    }
    else{
      this.setState({
        number2:number,
      })
    }
  }

  getResult(){
    let operation = "";
    console.log(this.state.idOperation);
    
    switch(this.state.idOperation){
      case "btnSum": operation = "+"
      break;
      case "btnSubt": operation = "-"
      break;
      case "btnMult": operation = "*"
      break;
      case "btnDivide": operation = "/"
      break;
      default: operation = "";
   
    }
    this.setState({
      result: calculate(this.state.number1, this.state.number2, operation),
    })
      
  }


   render(){ 
    
    return (
      <div className="Content">
        <h2>Ingresa los numeros</h2>
        <input id="num1" type="Number" onChange={this.handleChangeNumber} />
        <button id="btnSum" onClick={this.handleOperationClick}>+</button>
        <button id="btnSubt" onClick={this.handleOperationClick}>-</button>
        <button id="btnMult" onClick={this.handleOperationClick}>*</button>
        <button id="btnDivide" onClick={this.handleOperationClick}>/</button>
        <input id="num2" type="Number" onChange={this.handleChangeNumber} />
        <button onClick={this.getResult}>=</button>
        <p>{this.state.result}</p>
      </div>
      );
  }
}

export default Content;