// import React from 'react';
// import { NavLink } from 'react-router-dom';



// function Navbar() {
//   return (
//     <div className="navbar">
//       <div className="logo" id='top'>
//         <NavLink to="/">
//           <img src="logo.jpeg" alt="Logo" />
//         </NavLink>
//       </div>
//       <nav className="nav-links">
//         <NavLink to="/">Home</NavLink>
//         <NavLink to="/product">Product</NavLink>
//         <NavLink to="/services">Services</NavLink>
//         <NavLink to="/magazine">Magazine</NavLink>
//         <NavLink to="/vitraampus">Vitraampus</NavLink>
//         <NavLink to="/aboutvitra">Aboutvitra</NavLink>

//         {/* Search Icon */}
//         <NavLink to="#">
//           <i className="fa-solid fa-magnifying-glass"></i>
//         </NavLink>

//         {/* Dropdown */}
//         <div className="dropdown">
//           <button
//             className="btn btn-secondary dropdown-toggle"
//             type="button"
//             id="dropdownMenuButton1"
//             data-bs-toggle="dropdown"
//             aria-expanded="false"
//           >
//             <i class="fa-solid fa-user"></i>
//           </button>
//           <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
//             <li> <NavLink to="/login">Login</NavLink></li>
//             {/* <NavLink to="/login">Login</NavLink>
//             <NavLink to="/signup">Signup</NavLink> */}
//             <li><NavLink to="/signup">Signup</NavLink></li>
            
//           </ul>
//         </div>
//         <NavLink><i class="fa-solid fa-globe"></i></NavLink>
//       </nav>
//     </div>
//   );
// }

// export default Navbar;

import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="navbar">
      <div className="logo" id="top">
        <NavLink to="/">
          <img src="logo.jpeg" alt="Logo" />
        </NavLink>
      </div>
      
      {/* Menu icon for mobile */}
      <div className="menu-icon" onClick={toggleMobileMenu}>
        <i className="fa-solid fa-bars"></i>
      </div>

      <nav className={`nav-links ${isMobileMenuOpen ? 'show' : ''}`}>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/product">Product</NavLink>
        <NavLink to="/services">Services</NavLink>
        <NavLink to="/magazine">Magazine</NavLink>
        <NavLink to="/vitraampus">Vitraampus</NavLink>
        <NavLink to="/aboutvitra">Aboutvitra</NavLink>

        {/* Search Icon */}
        <NavLink to="#">
          <i className="fa-solid fa-magnifying-glass"></i>
        </NavLink>

        {/* Dropdown */}
        <div className="dropdown">
          <button
            className="btn btn-secondary dropdown-toggle"
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <i className="fa-solid fa-user"></i>
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li><NavLink to="/login">Login</NavLink></li>
            <li><NavLink to="/signup">Signup</NavLink></li>
          </ul>
        </div>

        {/* Language icon */}
        <NavLink>
          <i className="fa-solid fa-globe"></i>
        </NavLink>
      </nav>
    </div>
  );
}

export default Navbar;

