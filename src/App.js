import React, { Component } from 'react';
import './App.css';

import Title from './components/Title';
import Counter from './components/Counter';
import Reset from './components/Reset';

class App extends Component {
  state = {
    num: 0
  }

  incrementNum = () => {
    const currentNum = this.state.num;
    this.setState({ num: currentNum + 1 });
  }

  decrementNum = () => {
    const currentNum = this.state.num;
    this.setState({ num: currentNum - 1 });
  }

  resetNum = () => {
    this.setState({ num: 0 });
  }

  render() {
    return (
      <div className="App">
        <Title num={this.state.num} />
        <Counter incrementNum={this.incrementNum} decrementNum={this.decrementNum} />
        <Reset resetNum={this.resetNum} />
      </div>
    );
  }
}

export default App;
