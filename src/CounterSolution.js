import React from 'react';
import Counter from './Counter';
import CounterTotal from './CounterTotal';
import './App.css';
import axios from 'axios';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      counters: [
        {count: 0, countBy: 1},
        {count: 0, countBy: 2},
        {count: 0, countBy: 3}
      ],
      newCountBy: 1
    };

    this.increment = this.increment.bind(this)
    this.decrement = this.decrement.bind(this)
    this.countTotal = this.countTotal.bind(this)
    this.setNewCountBy = this.setNewCountBy.bind(this)
    this.add = this.add.bind(this)
    this.remove = this.remove.bind(this)
  }


 increment(index, countBy) {
    return () => {
      const counters = this.state.counters
      counters[index].count += countBy
      this.setState({ counters: counters })
    }
  }


  decrement(index, countBy) {
    return () => {
      const counters = this.state.counters
      counters[index].count -= countBy
      this.setState({ counters })
    }
  }


  countTotal(){
    return this.state.counters.reduce(
      (total, counter) => total + counter.count
      , 0) 
  }


  add(event) {
    event.preventDefault()

    let counters = this.state.counters
    counters.push({
      count: 0, 
      countBy: this.state.newCountBy
    })
    this.setState({ counters, newCountBy: 1 })
  }


  remove(index) {
    let counters = this.state.counters
    counters.splice(index, 1)
    this.setState({ counters })
  }


  setNewCountBy(event) {
    this.setState({ 
      newCountBy: parseInt(event.target.value) || 1 
    })
  }


  render() {
    return (
      <div className="page-center-frame">
        { this.state.counters.map((counter, index) => 
          <Counter 
            count={ counter.count }
            key={ index.toString() }
            incrementProp={ this.increment(index, counter.countBy) } 
            decrementProp={ this.decrement(index, counter.countBy) } 
            remove={ () => this.remove(index) }
          />
        )}

        <CounterTotal 
          totalProp={ this.countTotal() }
        />

        <form>
          <input 
            type="text" 
            onChange={ this.setNewCountBy }
            value={ this.state.newCountBy }
            />
          <button onClick={ this.add }>Add Counter</button>
        </form>
      </div>
    );
  }
}

export default App;