import React,{Component} from 'react'
import Fab from '@material-ui/core/Fab';
import './contador.scss'

class Prova extends Component {
    constructor(props){
        super(props)
        this.state = {
            aula : 'Arquivo criado como prova.js ',
            contador: 7,
        }
    }
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
    render(){
        return(
            <div>
                <h1>Contador</h1>
                <h2>Exercício 1:<br></br>  {this.state.aula}</h2>
                <br></br>
                <h2>Exercício 2, 3 <br></br> Clique para mostrar os multiplos de 7 =   {this.state.contador}</h2>
                <Fab variant="extended" onClick = {() => this.contadorIncrease(7)} >
                +
                </Fab>
                <h2>Exercício 4 <br></br> {this.contadorVerifier()}</h2>
            </div>
        )
    }
}

export default Prova; 