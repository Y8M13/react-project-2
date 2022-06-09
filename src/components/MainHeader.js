import React from 'react'
import { NavLink } from 'react-router-dom';

import classes from './MainHeader.css';

const MainHeader = () => {
  return (
    <header className={classes.header}>
      <nav>
        <ul>
          <li>
            <NavLink to='/home'>Home</NavLink>
          </li>
          <li>
            <NavLink to='/taskLog'>Task Log</NavLink>
          </li>
          <li>
            <NavLink to='/taskForm'>Task Form</NavLink>
          </li>
      </ul>
    </nav>
  </header>
  );
};

export default MainHeader;