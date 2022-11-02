import { React, useState } from 'react';
import { createSearchParams, NavLink, useNavigate } from 'react-router-dom';
import css from './Header.module.css';

export const Header = () => {
  const [name, setName] = useState('');
  const navigate = useNavigate();

  const handelOnChange = event => {
    setName(event.target.value);
  };
  const handelOnSubmit = event => {
    event.preventDefault();

    navigate({
      pathname: '/movies',
      search: createSearchParams({
        query: name,
      }).toString(),
    });

    setName('');
  };

  return (
    <div className={css.header}>
      <nav>
        <ul className={css.list}>
          <li>
            <NavLink to="/" className={css.item}>
              Home
            </NavLink>
          </li>
          <li>
            {/* <NavLink to="/movies" className={css.item}>
              Movies
            </NavLink> */}
          </li>
        </ul>
      </nav>
      <form className={css.searg} onSubmit={handelOnSubmit}>
        <input
          type="text"
          onChange={handelOnChange}
          className={css.input}
          value={name}
        />

        <button type="submit" className={css.button}></button>
      </form>
    </div>
  );
};

export default Header;
