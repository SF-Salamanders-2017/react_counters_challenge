import React from 'react';
import Counter from './Counter';
import './App.css';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
        counters: [
          {count: 0, increment: 1},
          {count: 0, increment: 2},
          {count: 0, increment: 3}
      ]
    };
      this.increment = this.increment.bind(this)
      this.total = this.total.bind(this)
  }

  increment(index, increment) {
    const counters = this.state.counters
    counters[index].count += increment
    this.setState({ counters } );
  }

  decrement(index, decrement) {
    const counters = this.state.counters
    counters[index].count -= decrement
    this.setState({ counters } );
  }

  total() {
    return this.state.counters.reduce(
      (total, counter) => total + counter.count
    , 0)
  }

  render() {
    return (
      <div className="page-center-frame">
        {this.state.counters.map((counter, index) => {
          return (
            <Counter
            increment={() => this.increment(index, counter.increment)}
            decrement={() => this.decrement(index, counter.increment)}
            count={counter.count}
            />
          )})
        }

        <div>
          Total: {this.total()}
        </div>
      </div>
    );
  }
}

export default App;
