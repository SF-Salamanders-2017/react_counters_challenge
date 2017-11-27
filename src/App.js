import React from 'react';
import Counter from './Counter';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="page-center-frame">
        <Counter count={1} />
        <Counter count={2}/>
        <Counter count={3} />
      </div>
    );
  }
}

export default App;
