import React from 'react';
import './Counter.css';

class Counter extends React.Component {
  // constructor() {
  //   super();
    // this.state = {
    //
    // };

    // this.increment = this.increment.bind(this)
    // this.decrement = this.decrement.bind(this)
  // }

  // increment() {
  //   this.setState({ count: this.state.count + this.props.count })
  // }
  //
  // decrement() {
  //   this.setState({ count: this.state.count - this.props.count})
  // }

  render() {
    return (
      <div className="counter">
        <button onClick={this.props.increment}>+</button>
        <div className="count">{this.props.count}</div>
        <button onClick={this.props.decrement}>-</button>
      </div>
    );
  }
}

export default Counter
