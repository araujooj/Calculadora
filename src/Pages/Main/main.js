import React, { Component } from 'react';
import Button from '../../Components/button'
import Display from '../../Components/display'
import './App.scss';
import NavigationIcon from '@material-ui/icons/Navigation';
import Fab from '@material-ui/core/Fab';
import {BrowserRouter as Router, Link} from 'react-router-dom';

const initialState = {
  displayValue : '0',
  clearDisplay: false,
  operation: null,
  values: [0,0],
  current: 0
}

class Main extends Component {
  state = {...initialState}

  constructor(props){
    super(props)
    this.clearMemory = this.clearMemory.bind(this)
    this.setOperation = this.setOperation.bind(this)
    this.addDigit = this.addDigit.bind(this)
    this.forceUpdateHandler.bind(this);
    this.state = {
      aula : 'Arquivo criado como prova.js ',
      contador: 7,
  }
  }

  clearMemory() {
    this.setState({...initialState})
  }

  setOperation(operation) {
    if (this.state.current === 0){
      this.setState({operation, current: 1, clearDisplay: true})
    } else {
      const equals = operation === '='
      const currentOperation = this.state.operation
      
      const values = [...this.state.values]
      try{
        values[0] = eval(`${values[0]} ${currentOperation} ${values[1]}`)
      }  catch(e){
          values[0] = this.state.values[0]
      }
      values[1] = 0

      this.setState({
        displayValue: values[0],
        operation: equals ? null: operation,
        current: equals ? 0 : 1,
        clearDisplay: !equals,
        values
      })
    }
  }
  forceUpdateHandler(){
    this.forceUpdate();
  };
  contadorIncrease(delta) {
    this.setState({contador: this.state.contador + delta})
 }
 contadorVerifier(){
     var contador = this.state.contador
     for(contador = 0; contador<= 100; contador++){
         if(contador%2 === 0){
          return <h2>é par</h2>
         } else{
          return <h3>é impar</h3>
         }
     }
 }
  addDigit(n) {
    if(n === '.' && this.state.displayValue.includes('.')) {
      return
    }

    const clearDisplay = this.state.displayValue === '0' 
    || this.state.clearDisplay
    const currentValue = clearDisplay ? '' : this.state.displayValue
    const displayValue = currentValue + n
    this.setState({ displayValue, clearDisplay: false})

    if(n !== '.'){
      const i = this.state.current
      const newValue = parseFloat(displayValue)
      const values = [...this.state.values]
      values[i] = newValue
      this.setState({values})
    }
  }
  render() {
    const addDigit = n => this.addDigit(n)
    const setOperation = op => this.setOperation(op)
    return (
      <div >
        <div className = 'text'>
         <h1>Calculadora <br/>
         Feita por Gabriel Araújo
         </h1>
        </div>

    <center>
      <div className = 'calculator'>
      <Display value = {this.state.displayValue}/>
      <Button label = 'AC' click = {() => this.clearMemory()} triple/>
      <Button label = '/' click = {this.setOperation} operation />
      <Button label = '7' click = {this.addDigit} />
      <Button label = '8' click = {this.addDigit} />
      <Button label = '9' click = {this.addDigit} />
      <Button label = '*' click = {this.setOperation} operation/>
      <Button label = '4' click = {this.addDigit} />
      <Button label = '5' click = {this.addDigit}/>
      <Button label = '6' click = {this.addDigit}/>
      <Button label = '-' click = {this.setOperation} operation/>
      <Button label = '1' click = {this.addDigit}/>
      <Button label = '2' click = {this.addDigit} />
      <Button label = '3' click = {this.addDigit}/>
      <Button label = '+' click = {this.setOperation} operation />
      <Button label = '0' click = {this.addDigit} double/>
      <Button label = '.' click = {this.addDigit}/>
      <Button label = '=' click = {this.setOperation} operation/>
      </div>
      <br></br>
      <h1>Contador</h1>
                <h2>Exercício 1:<br></br>  {this.state.aula}</h2>
                <br></br>
                <h2>Exercício 2, 3 <br></br> Clique para mostrar os multiplos de 7 =   {this.state.contador}</h2>
                <Fab variant="extended" onClick = {() => this.contadorIncrease(7)} >
                +
                </Fab>
                <h2>Exercício 4 <br></br> {this.contadorVerifier()}</h2>
    </center>

      </div>
    );
  }
}

export default Main;
