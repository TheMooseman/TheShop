import React from 'react'
import { NavLink, useLocation } from 'react-router-dom';
import '../styles/Navbar.scss'
import { ShoppingCart } from '@mui/icons-material';

function Navbar() {
  const numCartItems = 1;
  const location = useLocation();
  return (
    <div className='navbar'>
      <NavLink to='/pages/Home' style={{textDecoration: 'none', color: 'black'}}>
        <i href className='marker' > The Shop </i>
      </NavLink>
      <NavLink to="/pages/Cart" className='linkBtn'>
        <ShoppingCart className='cartSvg'/> 
          <p> {numCartItems} </p>
      </NavLink> 
    </div>
  )
}

export default Navbar