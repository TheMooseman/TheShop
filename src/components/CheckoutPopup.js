import React from 'react'
import '../styles/Checkout.scss'

function CheckoutPopup(props) {

  return (props.trigger) ? (
    <div className='checkoutPopup'>
        <div className='checkoutPopup-inner'>
            <button className='close-btn' onClick={props.setTrigger}>X</button>
            {props.children}
        </div>
    </div>
  ) : '';
}

export default CheckoutPopup