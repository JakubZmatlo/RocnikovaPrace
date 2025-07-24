import React from 'react'
import './Navbar.css'
import navlogo from '../../assets/navlogo.png'

const Navbar = () => {
  return (
    <div className='navbar'>
      <img src={navlogo} alt="nav-logo" className='nav-logo'/>
    </div>
  )
}

export default Navbar
