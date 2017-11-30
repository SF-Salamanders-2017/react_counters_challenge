import React from 'react';
import Counter from './Counter';
import './App.css';

class App extends React.Component {
  constructor(){
    super();
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
      this.total = this.total.bind(this)
      this.setNewCountBy = this.setNewCountBy.bind(this)
      this.add = this.add.bind(this)
      this.remove = this.remove.bind(this)
  }

  increment(index, countBy) {
    const counters = this.state.counters
    counters[index].count += countBy
    this.setState({ counters } );
  }

  decrement(index, countBy) {
    const counters = this.state.counters
    counters[index].count -= countBy
    this.setState({ counters } );
  }

  total() {
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
    this.setState({ counters, newCountBy: 1})
  }

  remove(index) {
    let counters = this.state.counters
    counters.splice(index, 1)
    this.setState({ counters })
  }

  setNewCountBy(event){
    this.setState({ newCountBy: parseInt(event.target.value) || 1 })
  }

  render() {
    return (
      <div className="page-center-frame">
        {this.state.counters.map((counter, index) => {
          return (
            <Counter
            key={index}
            increment={() => this.increment(index, counter.countBy)}
            decrement={() => this.decrement(index, counter.countBy)}
            count={counter.count}
            remove={() => this.remove(index)}
            />
          )
          })
        }
        <span>
          <p>
            Total: {this.total()}
          </p>
          <br/>
          <button onClick={this.add}>Add Counter with count by:</button>
          <form>
            <input
              type = 'text'
              onChange={this.setNewCountBy}
              value={this.state.setNewCountBy}
            />
          </form>
        </span>
      </div>
    );
  }
}

export default App;
