import React from 'react';
import { useState } from 'react';
import {Grid} from '@material-ui/core';
import CartCard from './CartCard';
import { updateCartCount } from '../features/CartRed';
import { useDispatch } from 'react-redux';

const CartCards = ({removeFromCart, minusQuantity, addQuantity}) => {

  const dispatch = useDispatch();
  let products = [];
  const [cards, setCards] = useState(products);

  if(localStorage.length > 0) {
    for( let i = 0; i < localStorage.length; i++) {
      products.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
    }
  }

  function updateCards() {
    products = [];
    if(localStorage.length > 0) {
      for( let i = 0; i < localStorage.length; i++) {
        let item = JSON.parse(localStorage.getItem(localStorage.key(i)));
        products.push(item);
      }
      dispatch(updateCartCount());
      setCards(products);
    }
  }

  function removeFromCart(key) {
    localStorage.removeItem(key);
    updateCards();
  }

  function addQuantity(key) {
    let newItem = JSON.parse(localStorage.getItem(key));
    newItem.quantity += 1;
    localStorage.setItem(newItem.title, JSON.stringify(newItem));
    updateCards();
  }

  function removeQuantity(key) {
    let newItem = JSON.parse(localStorage.getItem(key));
    if(newItem.quantity <= 1) {
      removeFromCart(key);
    } else {
      newItem.quantity -= 1;
      localStorage.setItem(newItem.title, JSON.stringify(newItem));
    }
    updateCards();
  }

  return (
    <main>
        <Grid container justify='center' spacing={4}>
            {cards.map((product) => (
                <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                    <CartCard
                    title={product.title}
                    desc={product.desc}
                    image={product.image}
                    price={product.prices}
                    quantity={product.quantity}
                    removeFromCart={removeFromCart}
                    removeQuantity={removeQuantity}
                    addQuantity={addQuantity}
                    />
                </Grid>
            ))}
        </Grid>
    </main>
  )
}

export default CartCards