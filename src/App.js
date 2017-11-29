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
      // this.incrementOne = this.incrementOne.bind(this)
      this.increment = this.increment.bind(this)
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

  render() {
    console.log(this.state.counters);
    console.log(this.state.counters[0]);
    console.log(this.state.counters[0].count)
    console.log(this.state.counters[1].increment)
    console.log(Object.keys(this.state.counters[0])[0])

    return (
      <div className="page-center-frame">
        {this.state.counters.map((counter, index) => {
          return (
            <Counter
            increment={() => this.increment(index, counter.increment)}
            decrement={() => this.decrement(index, counter.increment)}
            count={counter.count}
            />
          )
          })}

        <div>
          Total:
        </div>
      </div>
    );
  }
}

export default App;
