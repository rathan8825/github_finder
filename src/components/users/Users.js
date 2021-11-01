import React, { useContext } from 'react';
import UserItem from './UserItem';
import Spinner from '../layout/Spinner';
import GithubContext from '../../context/github/githubContext';

const Users = () => {
  const githubContext = useContext(GithubContext);
  //here we can write Users = (props) => {}...
  //but de-structuring will help to use the props directly and can be written as
  //const Users = ({ users, loading }) => {
  const { loading, users } = githubContext;
  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div style={userStyle}>
        {/*map through the users array and send user to useritem as props*/}
        {users.map((user) => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    );
  }
};

const userStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridGap: '1rem',
};

export default Users;
