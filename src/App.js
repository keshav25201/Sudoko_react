import React,{Component} from 'react';
import './index.css'
import Board from './board'
import Timer from './Timer'
import Result from './Result'
import {makepuzzle,solvepuzzle} from 'sudoku'
var raw;
var solved;
    
function Sudokugenerator(){
    raw = makepuzzle();
    const table = [];
    for(let i = 0;i<9;i++){
        var row = new Array(9);
        for(let j = 0;j<9;j++){
            var value = raw[9*i + j];
            value = value!==null?value+1:null;
            row[j] = {Row : i,Col:j,key:9*i+j,val:value,readonly:value!=null};
        }
        table.push(row);
    }
    return table;
}

class App extends Component{
    constructor(props){
        super(props);
        var d = new Date();
        this.state = {
            sudoku: Sudokugenerator(),
            showTimer:true,
            startTime:d.getSeconds()
        }
        this.onChange = this.onChange.bind(this);
        this.SolveSudoku = this.SolveSudoku.bind(this);
        this.check = this.check.bind(this);
    }
    onChange(cell,val){
        let a = this.state.sudoku;
      
        a[cell.Row][cell.Col].val =  parseInt(val);

        this.setState({
            sudoku:[...a],
            
        })
    }
    SolveSudoku(){
        solved = solvepuzzle(raw);
        let a = this.state.sudoku;
        for(let i = 0;i<9;i++){
            for(let j = 0;j<9;j++){
                a[i][j].val = solved[9*i+j]+1
            }
        }
        this.setState({
            sudoku:[...a],
            // showTimer:false
        })

    }
    check(){
        solved = solvepuzzle(raw);
        let a = this.state.sudoku;
        for(let i = 0;i<9;i++){
            for(let j = 0;j<9;j++){
                var v = a[i][j].val;
                if(v && v === solved[9*i+j]+1){
                    continue;
                }else{
              
                    alert("your answer is wrong")
                    return;
                }
            }
        }
        this.setState({
            sudoku:[...a],
            showTimer:false
        })

    }
    render(){
        return(
            <div className="app">
                 <div className="heading">
                    <h1>Sudoku Game</h1>
                </div>
                {this.state.showTimer && <Timer/>}
                {!this.state.showTimer && <Result startTime={this.state.startTime}/>}
               
                <Board sudoku = {this.state.sudoku} onChange = {this.onChange}/>   
                <div className="btns">
                <button onClick = {this.check} >Check !</button>
                <button onClick = {this.SolveSudoku}>Solve</button>
                </div> 
            </div>
        )
    }
}
export default App