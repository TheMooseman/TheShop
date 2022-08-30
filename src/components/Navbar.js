import React from 'react'
import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Navbar.scss'
import { ShoppingCart } from '@mui/icons-material';

function Navbar(props) {
  let totalItems = 0;
  useEffect(() => {
    window.addEventListener('storage', () => {
      totalItems = localStorage.length;
      console.log('test')
    })
  })

  return (
    <div className='navbar'>
      <NavLink to='/pages/Home' style={{textDecoration: 'none', color: 'black'}}>
        <i href className='marker' > The Shop </i>
      </NavLink>
      <NavLink to="/pages/Cart" className='linkBtn'>
        <ShoppingCart className='cartSvg'/> 
          <p> {totalItems} </p>
      </NavLink> 
    </div>
  )
}

export default Navbar