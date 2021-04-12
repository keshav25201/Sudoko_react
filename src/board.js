import React from 'react';
import Cell from './cell'
import Timer from './Timer'
import {makepuzzle,solvepuzzle} from 'sudoku'
var raw;
var solved;

function Sudokugenerator(){
     raw = makepuzzle();
    // console.log(raw);
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
class Board extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            sudoku:Sudokugenerator()
        }
        this.onChange = this.onChange.bind(this);
        this.SolveSudoku = this.SolveSudoku.bind(this);
        this.check = this.check.bind(this);
    }
    onChange(cell,val){
        let a = this.state.sudoku;
        a[cell.Row][cell.Col].val =  parseInt(val);
        // console.log(a);
        this.setState({
            sudoku:[...a]
        }
        )
        // console.log(this.state.sudoku);
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
            sudoku:[...a]
        })
        // console.log(solved);
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
                    // console.log(i,j,a[i][j].val);
                    alert("your answer is wrong")
                    return;
                }
            }
        }
        alert("your solution is correct");
    }
    render() {
        // console.log(this.state.sudoku);
        return (
            <div className="board">
                <Timer/>
                {this.state.sudoku.map((row,idx) => {
                    return (
                        <div className="row" key = {idx}>
                            {row.map(col => {
                                return (
                                    <Cell col = {col} key = {col.key} onChange = {this.onChange}/>
                                )
                            })}
                        </div>
                    )
                })}
                    <div className="btns">
                <button onClick = {this.check} >Check !</button>
                <button onClick = {this.SolveSudoku}>Solve</button>
                </div>
            </div>
            
        )
    }
}
export default Board;
