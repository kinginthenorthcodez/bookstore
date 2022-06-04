import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Nav from './Nav';
import App from '../App';
import Categories from './Categories';

const Layout = () => (
  <>
    <Nav />
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/categories" element={<Categories />} />
    </Routes>
  </>
);

export default Layout;
