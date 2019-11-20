import React, { Component } from 'react';

class Reset extends Component {
  render() {
    return (
      <div className="Reset">
        <button onClick={this.props.resetNum}>Reset</button>
      </div>
    )
  }
}

export default Reset;