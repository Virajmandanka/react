import React from 'react';
import { NavLink } from 'react-router-dom';



function Navbar() {
  return (
    <div className="navbar">
      <div className="logo-container">
        <img src="logo2footer.png" alt="Logo" className="logo" />
      </div>
      <NavLink exact to="/" activeClassName="active">Home</NavLink>
      <NavLink to="/product" activeClassName="active">Product</NavLink>
      <NavLink to="/login" activeClassName="active">Login</NavLink>
      <NavLink to="/signup" activeClassName="active">Signup</NavLink>
    </div>
  );
}

export default Navbar;