import React, { useState } from 'react'
import './Navbar.css'
import { TiThMenu } from "react-icons/ti";
import { FaRegWindowClose } from "react-icons/fa";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
    <nav className='navbar-container'>
      <div className="logo-container">
        <h1 className='nav-logo'>MoviesDB</h1>
        <div className='mobile-menu-icon' onClick={() => setIsOpen(!isOpen) }>{isOpen ? <FaRegWindowClose/>:<TiThMenu/>}</div>
      </div>

      <div className='lg-nav-items-container'>
        <input type="search" className='mobile-search-input large-search-input' placeholder="Search"/> 
        <ul className='lg-list-items-container'>  
      <li className='nav-item'>Home</li>
      <li className='nav-item'>Top Rated</li>
      <li className='nav-item'>New Releases</li>
      <li className='nav-item'>Popular</li>
      <li className='nav-item'>Upcoming Movies</li>
      <li className='nav-item'>About</li>
    </ul>
    </div>
    </nav>

    {isOpen && (
      <div className='nav-items-container'>
    <input type="search" className='mobile-search-input' placeholder="Search"/> 
    <ul className='list-items-container'>  
    <li className='nav-item'>Home</li>
    <li className='nav-item'>Top Rated</li>
    <li className='nav-item'>New Releases</li>
    <li className='nav-item'>Popular</li>
    <li className='nav-item'>Upcoming Movies</li>
    <li className='nav-item'>About</li>
    </ul>
    </div>)}
    </>
  )
}

export default Navbar