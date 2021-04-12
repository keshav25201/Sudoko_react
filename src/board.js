import React from 'react';
import Cell from './cell'


class Board extends React.Component{
    render() {
        const sudoku = this.props.sudoku;
        // console.log(this.state.sudoku);
        return (
            <div className="board">
                {sudoku.map((row,idx) => {
                    return (
                        <div className="row" key = {idx}>
                            {row.map(col => {
                                return (
                                    <Cell col = {col} key = {col.key} onChange = {this.props.onChange}/>
                                )
                            })}
                        </div>
                    )
                })}
                  
            </div>
            
        )
    }
}
export default Board;
