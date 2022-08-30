import React from 'react'
import { motion } from 'framer-motion';

import '../styles/Cart.scss';
import CartCards from '../components/CartCards';

function Cart() {

  function checkoutCart() {
    console.log('checkout');
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
        <button className='checkoutButton' onClick={checkoutCart}> CHECKOUT </button>
      </div>
      <CartCards />
    </motion.div>
  )
}

export default Cart