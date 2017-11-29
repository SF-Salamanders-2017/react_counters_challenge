import React from 'react';
import Counter from './Counter';
import './App.css';
import axios from'axios';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      counters: [],
      newChangeBy: 1,
    }

    this.increment = this.increment.bind(this)
    this.decrement = this.decrement.bind(this)
    this.remove = this.remove.bind(this)
    this.addNewCounter = this.addNewCounter.bind(this)
    this.setNewChangeBy = this.setNewChangeBy.bind(this)
    this.setNewChangeBy = this.setNewChangeBy.bind(this)
  }

  componentDidMount() {
    axios.get('http://numbers-api.herokuapp.com/').then((response)=>{
      let counters = response.data
      console.log(response.data);
      this.setState({ counters });
      })
  }

  addNewCounter(event) {
    event.preventDefault()
    this.state.counters.push({count: 0, changeBy: this.state.newChangeBy})
    this.setState({ counters: this.state.counters })
  }

  remove(index) {
    this.state.counters.splice(index, 1)
    this.setState({ counters: this.state.counters })
  }

  increment(index) {
    const counters = this.state.counters
    let counter = counters[index]
    counter.value += (index +1)
    // let currentCounter = this.state.counters[index]
    // currentCounter.count += currentCounter.changeBy

    // this.setState({ counters: this.state.counters })

    axios.put(`http://numbers-api.herokuapp.com/
      counters/${counter.id}`), counter)
      .then((response )=> {
        console.log(response.data)
        counter = response.data
        this. setState({counters})
      })
    }

  decrement(index) {
    let currentCounter = this.state.counters[index]
    currentCounter.count -= currentCounter.changeBy

    this.setState({ counters: this.state.counters })
  }

total() {
  return this.state.counters.reduce(function(total, counterData) {
    return total + counterData.count
  }, 0)
}

setNewChangeBy(event) {
  this.setState({newChangeBy: Number(event.target.value)})
}

  render() {
    return (
      <div className="page-center-frame">
      {this.state.counters.map((counterData, index) =>
        <Counter
          key={index}
          count={ counterData.count}
          increment={() => this.increment(index)}
          decrement={() => this.decrement(index)}
          remove={() => this.remove(index)}
         />
      )}
      <form action="" onSubmit={this.addNewCounter}>
        <input
          type="number"
          onChange={this.setNewChangeBy}
          value={this.state.newChangeBy}
        />
        <button>
        Add Fancy New Counter
        </button>
      </form>
      <p>
        Total: { this.total()}
      </p>
      </div>
    );
  }
}

export default App;
