// Navbar.js
import React from 'react';
import { NavLink } from 'react-router-dom';
// import './Navbar.css';

function Navbar() {
  return (
    <div className="navbar">
      <div className='jj'><img src="image/logo.png.webp" alt="" /></div>
      <NavLink to={'/'}>Home</NavLink>
      <NavLink to={'/Product'}>Product</NavLink>
      <NavLink to={'/Login'}>Login</NavLink>
      <NavLink to={'/Signup'}>Signup</NavLink>
    </div>
  );
}

export default Navbar;
