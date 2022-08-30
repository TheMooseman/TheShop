import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import '../styles/Navbar.scss'
import { ShoppingCart } from '@mui/icons-material';

function Navbar(props) {

  const [totalItems, setItems] = useState(0);
  
  function updateCart() {
    let numItems = 0;
    for(let i = 0; i < localStorage.length; i++) {
      numItems += JSON.parse(localStorage.getItem(localStorage.key(i))).quantity;
    }
    setItems(numItems);
  }

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