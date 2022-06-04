import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => (
  <>
    <header className="header">
      <nav className="nav">
        <h1 className="text-logo">Book Store</h1>
        <div className="links">
          <Link to="/">Books</Link>
          <Link to="/categories">Categories</Link>
        </div>
      </nav>
    </header>
  </>
);

export default Nav;
