import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './appBar.module.css';

const AppBar = () => {
  return (
    <header>
      <nav className={s.nav__header}>
        <ul className={s.nav__list}>
          <li className={s.nav__page}>
            <NavLink
              className="navLink"
              activeClassName="navLink--active"
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className="navLink"
              exact
              activeClassName="navLink--active"
              to="/users"
            >
              Users
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default AppBar;
