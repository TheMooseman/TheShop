import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Home from '../pages/Home';
import Cart from '../pages/Cart';

function AnimatedRoutes() {
    const location = useLocation();
  return (
    <div>
        <AnimatePresence exitBeforeEnter>
        <Routes location={location} key={location.pathname}>
            <Route path='./pages/Home' element={<Home />} />
            <Route path='./pages/Cart' element={<Cart />} />
        </Routes>
        </AnimatePresence>
    </div>
  )
}

export default AnimatedRoutes