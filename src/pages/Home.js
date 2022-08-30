import React from 'react'
import { motion } from 'framer-motion';
import ProductLayout from '../components/ProductLayout';

function Home(onAddToCart) {

  function handleAddToCart(productInfo, quantity) {
    let item;
    item = JSON.parse(localStorage.getItem(productInfo.title));
    if(item != null) {
      item.quantity = item.quantity + 1;
      localStorage.setItem(productInfo.title, JSON.stringify(item));
    } else {
      localStorage.setItem(productInfo.title, JSON.stringify(productInfo));
    }
  }

  return (
    <motion.div
    
    initial={{ opacity:0, duration: 1 }}
    animate={{ opacity:1, duration: 3 }}
    transition={{ opacity: 1, duration: 2}}
    exit={{ opacity:0, duration: 1.5 }}
    >
      <ProductLayout onAddToCart={handleAddToCart}>
        
      </ProductLayout>
    </motion.div>
  )
}

export default Home