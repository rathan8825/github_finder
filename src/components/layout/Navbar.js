import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Navbar = ({ icon, title }) => {
  return (
    <nav className='navbar bg-primary'>
      <h1>
        <i className={icon} /> {title}
      </h1>
      <ul>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
      </ul>
    </nav>
  );
};
Navbar.defaultProps = {
  title: 'GitHub-Finder',
  icon: 'fab fa-github',
};
//type check...title must be a string
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default Navbar;
