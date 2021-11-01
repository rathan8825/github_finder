import React, { useState, useContext } from 'react';
import GithubContext from '../../context/github/githubContext';
import AlertContext from '../../context/alert/alertContext';
const Search = () => {
  const githubContext = useContext(GithubContext);
  const alertContext = useContext(AlertContext);
  // state = {
  //   text: '',
  // };
  //with hooks
  const [text, setText] = useState('');
  const onSubmit = (e) => {
    e.preventDefault();
    if (text === '') {
      alertContext.setAlert(' please enter something', 'light');
    } else {
      //send the text as a prop to a function searchUsers in app.js
      //searchUsers(this.state.text);
      githubContext.searchUsers(text);
      // this.setState({ text: '' });
      setText('');
    }
  };
  //const onChange = (e) => this.setState({ [e.target.name]: e.target.value });
  const onChange = (e) => setText(e.target.value);
  return (
    <div>
      <form onSubmit={onSubmit} className='form'>
        <input
          type='text'
          name='text'
          placeholder='Search user...'
          //value={this.state.text}
          value={text}
          onChange={onChange}
        />
        <input
          type='submit'
          value='search'
          className='btn btn-dark btn-block'
        />
      </form>
      {githubContext.users.length > 0 && (
        <button
          className='btn btn-light btn-block'
          onClick={githubContext.clearUsers}
        >
          Clear
        </button>
      )}
    </div>
  );
};

export default Search;
