import React from 'react';
import Counter from './Counter';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="page-center-frame">
        <Counter prop={1} />
        <Counter prop={2} />
        <Counter prop={3} />
      </div>
    );
  }
}

export default App;
