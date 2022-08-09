import React from 'react'
import { motion } from 'framer-motion';

function Home() {
  return (
    <motion.div
    className='home'
    initial={{ opacity:0, duration: 1 }}
    animate={{ opacity:1, duration: 3 }}
    transition={{ opacity: 1, duration: 2}}
    exit={{ opacity:0, duration: 1.5 }}
    >
        HOME
    </motion.div>
  )
}

export default Home