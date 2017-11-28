import React from 'react';
import Counter from './Counter';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="page-center-frame">
        <Counter countBy = {1} />
        <Counter countBy = {2} />
        <Counter countBy = {3} />
      </div>
    );
  }
}

export default App;
