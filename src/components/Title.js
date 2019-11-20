import React, { Component } from 'react';
import './Title.css';

class Title extends Component {
  render() {
    return (
      <div className="Title">
        My current value is {this.props.num}
      </div>
    );
  }
}

export default Title;