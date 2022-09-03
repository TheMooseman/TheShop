import React, { useState } from 'react'
import { motion } from 'framer-motion';
import '../styles/Cart.scss';
import '../styles/ProductCard.scss'
import CartCards from '../components/CartCards';
import { useSelector } from 'react-redux';
import CheckoutPopup from '../components/CheckoutPopup';

function Cart() {
  const totalPrice = useSelector((state) => state.cartNum.price);
  const [popup, setPopup] = useState(false);

  function checkoutCart() {
    setPopup(true);
  }

  function closePopup() {
    setPopup(false);
  }

  return (
    <motion.div
    className='cart'
    initial={{ opacity:0, duration: 1 }}
    animate={{ opacity:1, duration: 3 }}
    transition={{ opacity: 1, duration: 2}}
    exit={{ opacity:0, duration: 1.5 }}
    >
      
      <div className='cartButtons'>
        <div className='cartSubtotal'>
          <p> Total ${totalPrice} </p>
        </div>

        <button className='checkoutButton' onClick={checkoutCart}> CHECKOUT </button>
      </div>

      <div className='cartItems'>
        <CartCards />
      </div>

      <CheckoutPopup trigger={popup} setTrigger={closePopup}> 
        Checkout
      </CheckoutPopup>

    </motion.div>
  )
}

export default Cart