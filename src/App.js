import React from 'react';
import Counter from './Counter';
import './App.css';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      countOne: 0,
      countTwo: 0,
      countThree: 0
    };

    this.increment = this.increment.bind(this)
    this.decrement = this.decrement.bind(this)
  }

 increment(keyName, countBy) {
    this.setState({ [keyName]: this.state[keyName] + countBy })
  }

  decrement(keyName, countBy) {
    return () => {
      return this.setState({ [keyName]: this.state[keyName] - countBy })
    }
  }

  render() {
    return (
      <div className="page-center-frame">
        <Counter 
        count={ this.state.countOne }
        incrementProp={ () => this.increment("countOne", 1) } 
        decrementProp={ this.decrement("countOne",1) } 
        />
        <Counter
        count={ this.state.countTwo }
        incrementProp={ () => this.increment("countTwo",2) } 
        decrementProp={ this.decrement("countTwo",2) }
         />
        <Counter
        count={ this.state.countThree }
        incrementProp={ () => this.increment("countThree", 3) } 
        decrementProp={ this.decrement("countThree", 3) }
         />
      </div>
    );
  }
}

export default App;



// def show
//   @film = Film.find(params[:film_id])
//   @comments = @film.comments
// end


// link_to @film, {comments: @comments}


// comments.each do |comment|

//   <li> comment.body </li>

// end 