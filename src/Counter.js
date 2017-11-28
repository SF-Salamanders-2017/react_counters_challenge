import React from 'react';
import './Counter.css';

class Counter extends React.Component {
  render() {
    return (
      <div className="counter">
        <button onClick={() => this.props.increment(this.props.counterIndex)}>+</button>
        <div className="count">{this.props.count}</div>
        <button onClick={() => this.props.decrement(this.props.counterIndex)}>-</button>
        <button onClick={() => this.props.removeCounter(this.props.counterIndex)}>Remove</button>
      </div>
    );
  }
}

export default Counter;