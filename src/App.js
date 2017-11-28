import React from 'react';
import Counter from './Counter';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      counters: [
        {
          count: 0,
          multiplier: 1
        },
        {
          count: 0,
          multiplier: 2
        },
        {
          count: 0,
          multiplier: 3
        }
      ],
      total: 0
    };

    this.increment = this.increment.bind(this)
    this.decrement = this.decrement.bind(this)
    this.total = this.total.bind(this)
  }

  increment(index) {
    const counters = this.state.counters
    const multiplier = counters[index].multiplier
    counters[index].count += counters[index].multiplier
    const total = this.total(counters)
    this.setState({ counters, total })
  }

  decrement(index) {
    const counters = this.state.counters
    const multiplier = counters[index].multiplier
    counters[index].count -= counters[index].multiplier
    const total = this.total(counters)
    this.setState({ counters, total })
  }

  total(counters) {
    return counters.reduce(function (sum, counter) {
      return sum + counter.count;
    }, 0);
  }

  render() {
    return (
      <div className="page-center-frame">
        {(this.state.counters).map((counter, index) =>
          <Counter
            increment={() => this.increment(index)}
            decrement={() => this.decrement(index)}
            count={counter.count}
          />
        )}

        {/* <Counter
          increment={this.increment}
          decrement={this.decrement}
          counterIndex={0}
          count={this.state.counters[0].count}
        />
        <Counter
          increment={this.increment}
          decrement={this.decrement}
          counterIndex={1}
          count={this.state.counters[1].count}
        />
        <Counter
          increment={this.increment}
          decrement={this.decrement}
          counterIndex={2}
          count={this.state.counters[2].count}
        /> */}

        <div className="counter">
          <button>Total</button>
          <div className="count">{this.state.total}</div>
          <button>counts</button>
        </div>
      </div>
    );
  }
}

export default App;
