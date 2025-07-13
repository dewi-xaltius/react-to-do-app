import React from 'react';
import { Link } from 'react-router-dom';

const AppHeader = () => (
  <header>
    <h1>My To Do App</h1>
    <nav>
      <Link to="/pending">Pending Tasks</Link>
      <Link to="/completed">Completed Tasks</Link>
    </nav>
  </header>
);

export default AppHeader;
