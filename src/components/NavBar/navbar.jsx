import React from 'react'
import {RiMenu3Line,RiCloseLine} from 'react-icons/ri';
import './navbar.css'
import logo from '../../assets/logo.png'

// BEM - Block Element Modifier

const Navbar = () => {
  return (
    <div className="Recycling__navbar">
      <div className="Recycling__navbar-links">
        <div className="Recycling__navbar-links-logo">
          <img src={logo} alt="logo" />
          </div>
       </div>
    </div>  
  )
}

export default Navbar