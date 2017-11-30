import React from 'react';
import Counter from './Counter';
import './App.css';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
        counters: [
          {count: 0, countBy: 1},
          {count: 0, countBy: 2},
          {count: 0, countBy: 3}
      ]
    };
      this.increment = this.increment.bind(this)
      this.total = this.total.bind(this)
  }

  increment(index, countBy) {
    const counters = this.state.counters
    counters[index].count += countBy
    this.setState({ counters } );
  }

  decrement(index, countBy) {
    const counters = this.state.counters
    counters[index].count -= countBy
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
            increment={() => this.increment(index, counter.countBy)}
            decrement={() => this.decrement(index, counter.countBy)}
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
