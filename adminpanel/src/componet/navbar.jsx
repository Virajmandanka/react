import React from 'react'

function Navbar() {
  return (

    <nav className="navbar">
            <ul>
              <li><a href=""><img src="logo.webp" alt="" height={100} width={100} /></a></li>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
            <input type="text" placeholder="Search..." className="navbar-input" />
        </nav>
  )
}

export default Navbar