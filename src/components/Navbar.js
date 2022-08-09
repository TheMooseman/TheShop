import React from 'react'
import { NavLink } from 'react-router-dom';
import '../styles/Navbar.scss'

function Navbar() {
  return (
    <div className='navbar'>
         <div className="links">
            <NavLink to="../pages/Home" className='linkBtn'>
                <a>Home</a> 
            </NavLink>
            <NavLink to="../pages/Cart" className='linkBtn'>
                <a>Cart</a>
            </NavLink> 
        </div>
    </div>
  )
}

export default Navbar