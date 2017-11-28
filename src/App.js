import React from 'react';
import Counter from './Counter';
import CounterTotal from './CounterTotal';
import './App.css';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
    //   countOne: 0,
    //   countTwo: 0,
    //   countThree: 0
      counters: [0, 0, 0]
    };

    this.increment = this.increment.bind(this)
    this.decrement = this.decrement.bind(this)
    this.countTotal = this.countTotal.bind(this)
  }

  // this.state.keys(keyName).map()

 // increment(keyName, countBy) {
 //    this.setState({ [keyName]: this.state[keyName] + countBy })
 //  }

 increment(index) {
    return () => {
      const counters = this.state.counters
      counters[index] += (index + 1)
      this.setState({ counters })
    }
  }

  // decrement(keyName, countBy) {
  //   return () => {
  //     return this.setState({ [keyName]: this.state[keyName] - countBy })
  //   }
  // }

  decrement(index) {
    return () => {
      const counters = this.state.counters
      counters[index] -= (index + 1)
      this.setState({ counters: counters })
    }
  }

  // render() {
  //   return (
  //     <div className="page-center-frame">
  //       <Counter 
  //       count={ this.state.countOne }
  //       incrementProp={ () => this.increment("countOne", 1) } 
  //       decrementProp={ this.decrement("countOne",1) } 
  //       />
  //       <Counter
  //       count={ this.state.countTwo }
  //       incrementProp={ () => this.increment("countTwo",2) } 
  //       decrementProp={ this.decrement("countTwo",2) }
  //        />
  //       <Counter
  //       count={ this.state.countThree }
  //       incrementProp={ () => this.increment("countThree", 3) } 
  //       decrementProp={ this.decrement("countThree", 3) }
  //        />
  //     </div>
  //   );

  countTotal(){
    return this.state.counters.reduce((total, counter) =>
      total + counter) 
  }

  render() {
    return (
      <div className="page-center-frame">
        { this.state.counters.map((counter, index) => 
          <Counter 
            count={ counter }
            key={ index.toString() }
            incrementProp={ this.increment(index) } 
            decrementProp={ this.decrement(index) } 
          />
        )}

        <CounterTotal 
          totalProp={ this.countTotal() }
        />
      </div>
    );
  }
}

export default App;