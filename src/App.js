import React from 'react';
import Counter from './Counter';
import './App.css';
import './Counter.css';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      counter1: 0,
      counter2: 0,
      counter3: 0,
    };

    // this.increment = this.increment.bind(this)
    // this.decrement = this.decrement.bind(this)
    // this.totalCount = this.totalCount.bind(this)
  }

  increment(keyName, countBy) {
      this.setState({ [keyName]: this.state[keyName] + countBy})
    }

  decrement(keyName, countBy) {
      this.setState({ [keyName]: this.state[keyName] - countBy})
    }

  totalCount() {
    return (this.state.counter1 +
            this.state.counter2 +
            this.state.counter3)
  }

  render() {
    return (
      <div className="page-center-frame">
        <Counter
          count = { this.state.counter1 }
          increment = {() => this.increment('counter1', 1)}
          decrement = {() => this.decrement('counter1', 1)} />
        <Counter
          count = { this.state.counter2 }
          increment = {() => this.increment('counter2', 2)}
          decrement = {() => this.decrement('counter2', 2)} />
        <Counter
          count = { this.state.counter3 }
          increment = {() => this.increment('counter3', 3)}
          decrement = {() => this.decrement('counter3', 3)}  />

        <div className="counter">
          Total: {this.totalCount()}
        </div>
      </div>
    );
  }
}


export default App;
