import React from 'react';
import { Link } from 'react-router-dom';
import { CgProfile } from 'react-icons/cg';

const Nav = () => (
  <>
    <header className="header">
      <nav className="nav">
        <h1 className="text-logo">Book Store</h1>
        <div className="links">
          <Link to="/">Books</Link>
          <Link to="/categories">Categories</Link>
          <span className="icon">
            <CgProfile size={30} />
          </span>
        </div>
      </nav>
    </header>
  </>
);

export default Nav;
