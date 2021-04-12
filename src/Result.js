import React, { Component } from 'react'

export default class Result extends Component {
    render() {
        var d = new Date();
        var elapsed = (d.getTime()-this.props.startTime)/1000;
        console.log(d.getSeconds());
        console.log(this.props.startTime);
        return (
            <div className="result">
               <h1>YaY! You Finished in {elapsed} seconds</h1> 
            </div>
        )
    }
}
