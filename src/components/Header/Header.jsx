import { React } from 'react';
import { Outlet, NavLink } from 'react-router-dom';
// import PropTypes from 'prop-types';

const Header = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/movies">Movies</NavLink>
          </li>
        </ul>
        <Outlet />
      </nav>
    </div>
  );
};

// Header.propTypes = {};

export default Header;
