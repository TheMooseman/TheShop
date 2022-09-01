import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import '../styles/Navbar.scss'
import { ShoppingCart } from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';
import { updateCartCount } from '../features/CartRed';

function Navbar(props) {
  const dispatch = useDispatch();
  const itemCount = useSelector((state) => state.cartNum.value);
  
  function updateItems() {
      dispatch(updateCartCount());
  }

  return (
    <div className='navbar'>
      <NavLink to='/pages/Home' style={{textDecoration: 'none', color: 'black'}}>
        <i href className='marker' > The Shop </i>
      </NavLink>
      <NavLink to="/pages/Cart" className='linkBtn'>
        <ShoppingCart className='cartSvg'/> 
          <p> {itemCount} </p>
      </NavLink>
      {updateItems()}
    </div>
  )
}

export default Navbar