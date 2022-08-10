import React from 'react'
import '../styles/ProductCard.scss';

function ProductCard(props) {
  return (
    <div className='card'>
        <h2> {props.title} </h2>
        <img src={props.image} />
        <p className='description'> {props.desc} </p>
        <p className='price'> {props.price} </p>
    </div>
  )
}

export default ProductCard