import React from 'react';
import './Counter.css';

class Counter extends React.Component {
  // constructor() {
    // super();
  //   this.state = {
  //     count: 0
    // };


  render() {
    return (
      <div className="counter">
        <button onClick={() => this.props.increment(this.props.counter, this.props.countBy, this.props.count)}>+</button>
        <div className="count">{this.props.count}</div>
        <button onClick={() => this.props.decrement(this.props.counter, this.props.countBy, this.props.count)}>-</button>

      </div>
    );
  }
}

export default Counter
