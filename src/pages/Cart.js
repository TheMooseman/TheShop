import React from 'react'
import { motion } from 'framer-motion';

function Cart() {
  return (
    <motion.div
    className='cart'
    initial={{ opacity:0, duration: 1 }}
    animate={{ opacity:1, duration: 3 }}
    transition={{ opacity: 1, duration: 2}}
    exit={{ opacity:0, duration: 1.5 }}
    >
        CART
    </motion.div>
  )
}

export default Cart