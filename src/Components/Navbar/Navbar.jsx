import React, { useState } from 'react'
import './Navbar.css'
import { TiThMenu } from "react-icons/ti";
import { FaRegWindowClose } from "react-icons/fa";
import { Link } from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
    <nav className='navbar-container'>
      <div className="logo-container">
        <h1> <Link to="/"  className='nav-logo'> MoviesDB </Link> </h1>
        <div className='mobile-menu-icon' onClick={() => setIsOpen(!isOpen) }>{isOpen ? <FaRegWindowClose/>:<TiThMenu/>}</div>
      </div>

      <div className='lg-nav-items-container'>
        <input type="search" className='mobile-search-input large-search-input' placeholder="Search"/> 
        <ul className='lg-list-items-container'>  
      <Link className='nav-item' style={{textDecoration: 'none'}} to="/">Home</Link>
      <Link style={{textDecoration: 'none'}} to="/top-rated" className='nav-item'>Top Rated</Link>
      <Link style={{textDecoration: 'none'}} to="/" className='nav-item'>Popular</Link>
      <Link style={{textDecoration: 'none'}} to="/upcoming-movies" className='nav-item'>Upcoming Movies</Link>
      <Link style={{textDecoration: 'none'}}  className='nav-item'>About</Link>
    </ul>
    </div>
    </nav>

    {isOpen && (
      <div className='nav-items-container'>
    <input type="search" className='mobile-search-input' placeholder="Search"/> 
    <ul className='list-items-container'>  
    <Link onClick={() => setIsOpen(false)} to="/" style={{textDecoration: 'none'}} className='nav-item'>Home</Link>
    <Link onClick={() => setIsOpen(false)}to="/top-rated" style={{textDecoration: 'none'}} className='nav-item'>Top Rated</Link>
    <Link onClick={() => setIsOpen(false)}to="/" style={{textDecoration: 'none'}} className='nav-item'>Popular</Link>
    <Link onClick={() => setIsOpen(false)}to="/upcoming-movies" style={{textDecoration: 'none'}} className='nav-item'>Upcoming Movies</Link>
    <Link onClick={() => setIsOpen(false)} style={{textDecoration: 'none'}} className='nav-item'>About</Link>
    </ul>
    </div>)}
    </>
  )
}

export default Navbar