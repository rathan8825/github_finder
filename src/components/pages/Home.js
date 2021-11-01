import React, { Fragment } from 'react';
import Search from '../users/Search';
import Users from '../users/Users';

const Home = () => (
  <Fragment>
    <Search />
    {/* pass the user props onto the users component */}
    <Users />
  </Fragment>
);

export default Home;
