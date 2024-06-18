import React, { useState } from 'react';

import { Link } from 'react-router-dom';
import './Navbar.css';

import {AiOutlineMenu} from 'react-icons/ai'
import {AiOutlineClose} from 'react-icons/ai'

function Navbar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <nav className='navbar'>
        <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
          EPIC
        
        </Link>
        <div className='menu-icon' onClick={handleClick}>
         {click ? <AiOutlineClose/> : <AiOutlineMenu/>}
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/projects'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Projects
            </Link>
          </li>
         
          <li className='nav-item'>
            <Link
              to='/skills'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Skills
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/about'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              About Me
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/contact'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Contact Me
            </Link>
          </li>
          
        </ul>
    
      </nav>
    </>
  );
}

export default Navbar;