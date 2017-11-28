import React from 'react';
import './Counter.css';

class Counter extends React.Component {
  // constructor() {
    // super();
    // this.state = {
    //   count: 0
    // };

  //   this.increment = this.increment.bind(this)
  //   this.decrement = this.decrement.bind(this)
  // }

  // increment() {
  //   this.setState({ count: 
    // this.state.count + 1 })
    // this.state.count + this.props.prop })
  // }

  // decrement() {
  //   this.setState({ count: 
    // this.state.count - 1 })
    // this.state.count - this.props.prop })
  // }

  render() {
    return (
      <div className="counter">
        <button onClick={ this.props.incrementProp }>+</button>
        <div className="count">{ this.props.count }</div>
        <button onClick={ this.props.decrementProp }>-</button>
      </div>
    );
  }
}

export default Counter