import React from 'react';
import './Counter.css';

class CounterTotal extends React.Component {

  render() {
    return (
      <div className="total">
        TOTAL: { this.props.totalProp }
      </div>
    );
  }
}

export default CounterTotal