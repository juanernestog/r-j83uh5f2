import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    this.updateCount = this.updateCount.bind(this);
  }
  updateCount(event) {
    this.setState({ count: event.target.value.length });
  }
  render() {
    return (
      <div className="container">
        <textarea rows="3" onChange={this.updateCount}></textarea>
        <div className="counter">{this.state.count}</div>
      </div>
    );
  }
}

export default App;
