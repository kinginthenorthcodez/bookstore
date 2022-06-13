import React from 'react';
import { Link } from 'react-router-dom';
import { CgProfile } from 'react-icons/cg';

const Nav = () => (
  <>
    <header className="header">
      <nav className="nav">
        <h1 className="text-logo">BookStore CMS</h1>
        <div className="links">
          <div className="link-items">
            <Link to="/">Books</Link>
            <Link to="/categories">Categories</Link>
          </div>
          <span className="icon">
            <CgProfile size={30} />
          </span>
        </div>
      </nav>
    </header>
  </>
);

export default Nav;
