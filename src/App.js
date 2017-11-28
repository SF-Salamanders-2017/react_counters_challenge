import React from 'react';
import Counter from './Counter';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="page-center-frame">
        <Counter myCount={1} />
        <Counter myCount={2} />
        <Counter myCount={3} />
      </div>
    );
  }
}

export default App;
