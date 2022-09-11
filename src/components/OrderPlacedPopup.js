import React from 'react';
import '../styles/Ordered.scss';

function OrderPopup(props) {

  return (props.trigger) ? (
    <div className='orderPopup'>
        <div className='orderPopupBg' onClick={props.setTrigger}></div>
        <div className='orderPopup-inner' >
            <button className='close-btn' onClick={props.setTrigger}>X</button>
            <h1>Order Placed!</h1>
            <p>Thank you for your order, it's on the way!</p>
        </div>
    </div>
  ) : '';
}

export default OrderPopup;