import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import '../styles/Navbar.scss'
import { ShoppingCart } from '@mui/icons-material';
import { useSelector } from 'react-redux';

function Navbar(props) {
  const itemCount = useSelector((state) => state.cartNum.value);

  return (
    <div className='navbar'>
      <NavLink to='/pages/Home' style={{textDecoration: 'none', color: 'black'}}>
        <i href className='marker' > The Shop </i>
      </NavLink>
      <NavLink to="/pages/Cart" className='linkBtn'>
        <ShoppingCart className='cartSvg'/> 
          <p> {itemCount} </p>
      </NavLink> 
    </div>
  )
}

export default Navbar