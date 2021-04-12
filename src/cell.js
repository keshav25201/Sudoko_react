import React, { Component } from "react";

export default class Cell extends Component {
    handleChange = e => {
        var value = e.target.value;
        this.props.onChange(this.props.col,value);
    }
  render() {
    return (
      <input
        className="cell"
        type="number"
        value={this.props.col.val||""}
        readOnly={this.props.col.readonly}
        onChange={this.handleChange}
      />
    );
  }
}
