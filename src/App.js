import React from 'react';
import Counter from './Counter';
import './App.css';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      counters: [
        {count: 0, countBy: 1},
        {count: 0, countBy: 2},
        {count: 0, countBy: 3}
      ]
    };

    this.increment = this.increment.bind(this)
    this.decrement = this.decrement.bind(this)
    this.total = this.total.bind(this)
  }

  increment(index) {
    let counters = this.state.counters
    counters[index].count += counters[index].countBy;
    debugger
    this.setState({counters})
  }

  decrement(index) {
    let counters = this.state.counters
    counters[index].count -= counters[index].countBy;
    debugger
    this.setState({counters})
  }

  total() {
    return this.state.counters.reduce((sum, counter) => sum + counter.count, 0);
  }

  render() {
    return (
      <div className="page-center-frame">
        {(this.state.counters)
             .map((counter, index) =>
              <Counter increment={() => this.increment(index)}
              decrement={() => this.decrement(index)} count={counter.count} />
        )}

        <div>
          <span>Total {this.total()}</span>
        </div>
      </div>
    );
  }
}

export default App;
