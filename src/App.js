import React, { Component } from 'react';
import axios from 'axios';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import Search from './components/users/Search';
import './App.css';

class App extends Component {
  //initial state declaration
  state = {
    users: [], //empty users list
    loading: false,
  };
  //search github users
  searchUsers = async (text) => {
    this.setState({ loading: true });
    //make a request
    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    //set state
    this.setState({ users: res.data.items, loading: false });
  };
  render() {
    return (
      <div className='App'>
        <Navbar title='GitHub-Finder' />
        <div className='container'>
          <Search searchUsers={this.searchUsers} />
          {/* pass the user props onto the users component */}
          <Users loading={this.state.loading} users={this.state.users} />
        </div>
      </div>
    );
  }
}

export default App;
