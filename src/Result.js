import React, { Component } from 'react'

export default class Result extends Component {
    render() {
        var d = new Date();
        var elapsed = d.getSeconds()-this.props.startTime;
        return (
            <div className="result">
                YaY! You Finished in {elapsed} seconds
            </div>
        )
    }
}
