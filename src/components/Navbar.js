import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import '../styles/Navbar.scss'
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import { ShoppingCart } from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';
import { updateCartCount } from '../features/CartRed';
import AccountPopup from './AccountPopup';

function Navbar(props) {
  const dispatch = useDispatch();
  const itemCount = useSelector((state) => state.cartNum.value);
  const [popup, setPopup] = useState(false);

  function updateItems() {
      dispatch(updateCartCount());
  }

  function handleAccountClick() {
    setPopup(true);
  }

  function handleLogin() {
    setPopup(false);
  }

  function closePopup() {
    setPopup(false);
  }

  return (
    <div>
    <div className='navbar'>
      <NavLink to='/pages/Home' style={{textDecoration: 'none', color: 'black'}}>
        <i href className='marker' > The Shop </i>
      </NavLink>
      <div className='box3'>
      <button className='linkBtn' onClick={handleAccountClick} style={{width: '30%'}}>
      <AccountBoxIcon className='account'/>
      </button>
      <NavLink to="/pages/Cart" className='linkBtn'>
        <ShoppingCart className='cartSvg'/> 
          <p> {itemCount} </p>
      </NavLink>
      </div>
      {updateItems()}
    </div>
    <AccountPopup trigger={popup} setTrigger={closePopup} login={handleLogin}/>
    </div>
  )
}

export default Navbar