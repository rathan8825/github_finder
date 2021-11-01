import React, { useReducer } from 'react';
import axios from 'axios';
import GithubContext from './githubContext';
import GithubReducer from './githubReducer';
import {
  SEARCH_USERS,
  SET_LOADING,
  GET_REPOS,
  GET_USER,
  CLEAR_USERS,
} from '../types';

let githubClientId;
let githubClientSecret;

if (process.env.NODE_ENV !== 'production') {
  githubClientId = process.env.REACT_APP_GITHUB_CLIENT_ID;
  githubClientSecret = process.env.REACT_APP_GITHUB_CLIENT_SECRET;
} else {
  githubClientId = process.env.GITHUB_CLIENT_ID;
  githubClientSecret = process.env.GITHUB_CLIENT_SECRET;
}

const GithubState = (props) => {
  const initialstate = {
    users: [],
    user: {},
    repos: [],
    loading: false,
  };
  const [state, dispatch] = useReducer(GithubReducer, initialstate);

  //search users
  const searchUsers = async (text) => {
    // this.setState({ loading: true });
    setLoading();
    //make a request
    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${githubClientId}&client_secret=${githubClientSecret}`
    );
    //set state
    // this.setState({ users: res.data.items, loading: false });
    dispatch({
      type: SEARCH_USERS,
      payload: res.data.items,
    });
  };
  const setLoading = () => dispatch({ type: SET_LOADING });
  //Get user
  const getUser = async (username) => {
    // this.setState({ loading: true });
    setLoading();
    //make a request
    const res = await axios.get(
      `https://api.github.com/users/${username}?client_id=${githubClientId}&client_secret=${githubClientSecret}`
    );
    //set state
    // this.setState({ user: res.data, loading: false });
    dispatch({
      type: GET_USER,
      payload: res.data,
    });
  };

  //Get Repos
  const getUserRepos = async (username) => {
    // this.setState({ loading: true });
    setLoading();
    //make a request
    const res = await axios.get(
      `https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${githubClientId}&client_secret=${githubClientSecret}`
    );
    //set state
    // this.setState({ repos: res.data, loading: false });
    dispatch({
      type: GET_REPOS,
      payload: res.data,
    });
  };
  //Clear users
  const clearUsers = () => dispatch({ type: CLEAR_USERS });

  //set loading

  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        user: state.user,
        repos: state.repos,
        loading: state.loading,
        searchUsers,
        clearUsers,
        getUser,
        getUserRepos,
      }}
    >
      {props.children}
    </GithubContext.Provider>
  );
};
export default GithubState;
