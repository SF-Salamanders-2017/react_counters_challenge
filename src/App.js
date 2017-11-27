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
      count: 0
    };
    this.increment = this.increment.bind(this)
    this.decrement = this.decrement.bind(this)
    this.totalCount = this.totalCount.bind(this)
  }

  increment(counter, countBy, count) {
      this.setState({ [counter]: count + countBy})
    }

    decrement(counter, countBy, count) {
      this.setState({ [counter]: count - countBy})
    }
    totalCount() {
      return (
        this.state.counter1 + this.state.counter2 + this.state.counter3

        )
      }

  render() {
    return (
      <div className="page-center-frame">
        <Counter
          counter = "counter1"
          countBy = {1}
          count = {this.state.counter1}
          increment = {this.increment}
          decrement = {this.decrement}
         />
        <Counter
          counter = "counter2"
          countBy = {2}
          count = {this.state.counter2}
          increment = {this.increment}
          decrement = {this.decrement}/>
        <Counter
          counter = "counter3"
          countBy = {3}
          count = {this.state.counter3}
          increment = {this.increment}
          decrement = {this.decrement} />

        <div className="counter">
          Total: {this.totalCount()}
        </div>
      </div>
    );
  }
}


export default App;
