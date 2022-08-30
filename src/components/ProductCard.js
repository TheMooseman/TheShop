import React from 'react'
import '../styles/ProductCard.scss';

function ProductCard(props) {
  const retProps = {title: props.title, image: props.image, desc: props.desc, prices:props.price, quantity:1};

  return (
    <div className='card'>
        <h2> {props.title} </h2>
        <img src={props.image} />
        <p className='description'> {props.desc} </p>
        <p className='price'> {props.price} </p>
        <button className='cardButton' onClick={() => props.onAddToCart(retProps, 1)}> 
        Add To Cart
        </button>
    </div>
  )
}

export default ProductCard