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
      // total: 4,
      newMultiplier: 0
    };

    this.increment = this.increment.bind(this)
    this.decrement = this.decrement.bind(this)
    this.total = this.total.bind(this)
    this.addCounter = this.addCounter.bind(this)
    this.handleMultiplierChange = this.handleMultiplierChange.bind(this)
    this.removeCounter = this.removeCounter.bind(this)
  }

  increment(index) {
    const counters = this.state.counters
    const multiplier = counters[index].multiplier
    counters[index].count += counters[index].multiplier
    this.setState({ counters })
  }

  decrement(index) {
    const counters = this.state.counters
    const multiplier = counters[index].multiplier
    counters[index].count -= counters[index].multiplier
    this.setState({ counters })
  }

  total() {
    return this.state.counters.reduce(function (sum, counter) {
      return sum + counter.count;
    }, 0);
  }

  handleMultiplierChange(event) {
    let value = parseInt(event.target.value, 10)
    this.setState({newMultiplier: isNaN(value) ? 0 : value})
  }

  addCounter() {
    const counters = this.state.counters
    counters.push({count: 0, multiplier: (this.state.newMultiplier)})
    this.setState({ counters, newMultiplier: 0 })
  }

  removeCounter(index) {
    const counters = this.state.counters
    counters.splice(index, 1)
    this.setState({ counters })
  }

  render() {
    return (
      <div className="page-center-frame">
        <div className="counter">
          <p>Enter multiplier</p>
          <div className="count">
            <input onChange={this.handleMultiplierChange} type="text" value={this.state.newMultiplier} />
          </div>
          <button onClick={this.addCounter}>Add counter</button>
        </div>

        {(this.state.counters).map((counter, index) =>
          <Counter
            increment={() => this.increment(index)}
            decrement={() => this.decrement(index)}
            count={counter.count}
            removeCounter={() => this.removeCounter(index)}
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
          <div className="count">{this.total()}</div>
          <button>counts</button>
        </div>
      </div>
    );
  }
}

export default App;
