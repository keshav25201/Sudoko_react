import React,{Component} from 'react';
import './index.css'
import Board from './board'

class App extends Component{
    render(){
        return(
            <div className="app">
                <div className="heading">
                    <h1>Sudoku Game</h1>
                </div>
         
                <Board/>    
            </div>
        )
    }
}
export default App