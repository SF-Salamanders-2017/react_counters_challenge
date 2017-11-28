import React from 'react';
import './Counter.css';

class Counter extends React.Component {


  render() {
    return (
      <div className="counter">
        <button onClick={this.props.incrementProp}>+</button>
        <div className="count">{this.props.count}</div>
        <button onClick={this.props.decrementProp}>-</button>
        <button onClick={this.props.remove}>X</button>
      </div>
    );
  }
}

export default Counter;