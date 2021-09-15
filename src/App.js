import React, { Component } from 'react';
import Navbar from './components/layout/Navbar';
import './App.css';

class App extends Component {
  method_1 = () => 'this is from method_1';

  render() {
    return (
      <div className='App'>
        <Navbar title='GitHub-Finder' />
      </div>
    );
  }
}

export default App;
