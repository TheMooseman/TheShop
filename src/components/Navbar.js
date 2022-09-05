import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';
import '../styles/Navbar.scss'
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import { ShoppingCart } from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../firebase-config';
import { updateCartCount } from '../features/CartRed';
import AccountPopup from './AccountPopup';

const Navbar = (props) => {

  const dispatch = useDispatch();
  const itemCount = useSelector((state) => state.cartNum.value);
  const [popup, setPopup] = useState(false);
  const [user, setUser] = useState({});
  const [loginErr, setLoginErr] = useState('');

  useEffect(() => {

    setUser(auth.currentUser);

    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log(currentUser);
    });

  }, [])

  function updateItems() {
      dispatch(updateCartCount());
  }

  function handleAccountClick() {
    setPopup(true);
  }

  async function handleLogin(email, pass, e) {
    e.preventDefault();
    let userInfo = {};
    let closePopup = true;
    try {
      userInfo = await signInWithEmailAndPassword(auth, email, pass);
      setUser(userInfo);
      setLoginErr('');
    } catch (error) {
      closePopup = false;
      setLoginErr(error);
      console.log(error.message);
    }
    
    console.log(userInfo)
    if(closePopup) {
      setPopup(false);
    }
    
  }

  async function handleRegister(email, pass, e) {
    e.preventDefault();
    let userInfo = {};
    try {
      userInfo = await createUserWithEmailAndPassword(auth, email, pass);
    } catch (error) {
      console.log(error.message);
    }

    setPopup(false);
  }

  async function handleLogout() {
    await signOut(auth);
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
      <button className='linkBtn' onClick={handleAccountClick}
      style={{width: '30%'}}>
      <AccountBoxIcon className='account'/>
      </button>
      <NavLink to="/pages/Cart" className='linkBtn'>
        <ShoppingCart className='cartSvg'/> 
          <p> {itemCount} </p>
      </NavLink>
      </div>
      {updateItems()}
    </div>

    <AccountPopup
      user={user}
      trigger={popup}
      setTrigger={closePopup}
      login={handleLogin}
      register={handleRegister}
      logout={handleLogout}
      error={loginErr}
    />
    </div>
  )
}

export default Navbar