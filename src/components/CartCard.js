import React from 'react'
import '../styles/Cart.scss';

function CartCard(props) {
  const retProps = {title: props.title, image: props.image, desc: props.desc, prices:props.price, quantity: props.quantity};

  return (
    <div className='cartCard'>
        <h2> {props.title} </h2>
        <img src={props.image} />
        <p className='text'> {props.desc} </p>
        <p className='text'> {props.price} </p>
        
        
        <div className='quantity'>
        <button className='cardButton'
        onClick={() => props.removeQuantity(props.title)}
        > 
        -
        </button>
          <p className='quantityText'> {props.quantity} </p>
          <button className='cardButton'
          onClick={() => props.addQuantity(props.title)}
          > 
          +
          </button>
        </div>

        <br></br>
        <button className='cardButton' onClick={() => props.removeFromCart(props.title)}> 
        Remove Item
        </button>
    </div>
  )
}

export default CartCard