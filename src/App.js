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
      // counters: [0, 0, 0]
      counters: [
        {count: 0, countBy: 1},
        {count: 0, countBy: 2},
        {count: 0, countBy: 3}
      ]
    };

    this.increment = this.increment.bind(this)
    this.decrement = this.decrement.bind(this)
    this.countTotal = this.countTotal.bind(this)
    this.add = this.add.bind(this)
    this.setNewCountBy = this.setNewCountBy.bind(this)
    this.remove = this.remove.bind(this)
  }

  // this.state.keys(keyName).map()

 // increment(keyName, countBy) {
 //    this.setState({ [keyName]: this.state[keyName] + countBy })
 //  }

 increment(index) {
    return () => {
      const counters = this.state.counters
      // counters[index] += (index + 1)
      counters[index].count += countBy
      this.setState({ counters: counters })
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
      // counters[index] -= (index + 1)
      counters[index].count += countBy
      this.setState({ counters })
    }
  }

  countTotal(){
    return this.state.counters.reduce((total, counter) =>
      total + counter) 
  }

  // add(countBy) {
  add(event) {
    let counters = this.state.counters
    // counters.push({ count: 0, countBy})
    counters.push({count: 0, countBy: this.state.newCountBy})
    this.setState({ counters, newCountBy: 1 })
  }

  setNewCountBy(event) {
    this.setState({ newCountBy: parseInt(event.target.value) || 1 })
  }

  remove(index) {
    let counters = this.state.counters
    counters.splice(index, 1)
    this.setState({ counters })
  }


  // render() {
  //   return (
  //     <div className="page-center-frame">
  //       {React.createElement.(Counter, { countBy: 1 })}
  //       <Counter countBy={1} />
  //       <Counter 
  //       count={ this.state.countOne }
  //       incrementProp={ () => this.increment("countOne", 1) } 
  //       decrementProp={ this.decrement("countOne",1) } 
  //       />
  //       {React.createElement.(Counter, { countBy: 2 })}
  //       <Counter countBy={2} />
  //       <Counter
  //       count={ this.state.countTwo }
  //       incrementProp={ () => this.increment("countTwo",2) } 
  //       decrementProp={ this.decrement("countTwo",2) }
  //        />
  //       {React.createElement.(Counter, { countBy: 1 })}
  //       <Counter countBy={3} />
  //       <Counter
  //       count={ this.state.countThree }
  //       incrementProp={ () => this.increment("countThree", 3) } 
  //       decrementProp={ this.decrement("countThree", 3) }
  //        />
  //
  //      <p>{ this.countTotal() }</p>
  //     </div>
  //   );


  render() {
    return (
      <div className="page-center-frame">
        { this.state.counters.map((counter, index) => 
          return <Counter 
            count={ counter.count }
            key={ index.toString() }
            // incrementProp={ this.increment(index) } 
            incrementProp={ this.increment(index, counter.count) } 
            // decrementProp={ this.decrement(index) } 
            decrementProp={ this.decrement(index, counter.count) } 
            remove={ () => this.remove(index) }
          />
        )}

        <CounterTotal 
          totalProp={ this.countTotal() }
        />

        <form action="">
          <input 
            type="text" 
            onChange={this.setNewCountBy
            value={this.state.newCountBy}} 
            />
          <button onClick={this.add(this.state.newCountBy)}</button>
          <button onClick={this.add}>Add Counter</button>
        </form>
      </div>
    );
  }
}

export default App;