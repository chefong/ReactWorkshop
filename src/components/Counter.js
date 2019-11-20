import React, { Component } from 'react';

class Counter extends Component {
  render() {
    return (
      <div className="Counter">
        <button onClick={this.props.incrementNum}>Up</button>
        <button onClick={this.props.decrementNum}>Down</button>
      </div>
    );
  }
}

export default Counter;