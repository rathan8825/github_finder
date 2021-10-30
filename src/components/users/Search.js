import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Search = ({ showClear, searchUsers, clearUsers, setAlert }) => {
  // state = {
  //   text: '',
  // };
  //with hooks
  const [text, setText] = useState('');
  const onSubmit = (e) => {
    e.preventDefault();
    if (text === '') {
      setAlert(' please enter something', 'light');
    } else {
      //send the text as a prop to a function searchUsers in app.js
      //searchUsers(this.state.text);
      searchUsers(text);
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
      {showClear && (
        <button className='btn btn-light btn-block' onClick={clearUsers}>
          Clear
        </button>
      )}
    </div>
  );
};
Search.propTypes = {
  searchUsers: PropTypes.func.isRequired,
  clearUsers: PropTypes.func.isRequired,
  showClear: PropTypes.bool.isRequired,
  setAlert: PropTypes.func.isRequired,
};
export default Search;
