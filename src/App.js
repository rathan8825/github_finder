import React, { Component } from 'react';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import './App.css';

class App extends Component {
  method_1 = () => 'this is from method_1';

  render() {
    return (
      <div className='App'>
        <Navbar title='GitHub-Finder' />
        <div className='container'>
          <Users />
        </div>
      </div>
    );
  }
}

export default App;
