import React from 'react';
import Counter from './Counter';
import './App.css';
import './Counter.css';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      counters: [0, 0, 0]
    }

    // this.increment = this.increment.bind(this)
    // this.decrement = this.decrement.bind(this)
    // this.totalCount = this.totalCount.bind(this)
  }

  increment(index, countBy) {
    const counters = this.state.counters
    counters[index] += countBy
    this.setState({counters})
    }

  decrement(index, countBy) {
    const counters = this.state.counters
    counters[index] -= countBy
    this.setState({counters})
    }

  totalCount() {
    return this.state.counters.reduce((sum, value) => value += sum)
  }

  render() {
    return (
      <div className="page-center-frame">

        {this.state.counters.map((counter, index) => {
          return (
            <Counter key = {index}
              count = {counter}
              increment = {() => this.increment(index, index + 1)}
              decrement = {() => this.decrement(index, index + 1)}
            />
          )}
        )}
        <div className="counter">
          Total: {this.totalCount()}
        </div>
      </div>
    );
  }
}

export default App;


    // this.state = {
    //   counter1: 0,
    //   counter2: 0,
    //   counter3: 0,
    // };
        // <Counter
        //   count = { this.state.counter1 }
        //   increment = {() => this.increment('counter1', 1)}
        //   decrement = {() => this.decrement('counter1', 1)} />
        // <Counter
        //   count = { this.state.counter2 }
        //   increment = {() => this.increment('counter2', 2)}
        //   decrement = {() => this.decrement('counter2', 2)} />
        // <Counter
        //   count = { this.state.counter3 }
        //   increment = {() => this.increment('counter3', 3)}
        //   decrement = {() => this.decrement('counter3', 3)}  />
