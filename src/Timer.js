import React, { Component } from 'react'

export default class Timer extends Component {
    constructor(props){
        super(props);
        this.state = {
            time:0
        }
        this.increment = this.increment.bind(this);
        setInterval(this.increment,1000);
    }
    increment(){

        this.setState({
            time:this.state.time+1
        })
    }
    render() {
        return (
            <div>
                TIME:{this.state.time}           
            </div>
        )
    }
}
