import React from 'react';
import data from '../allstates.json';
import '../styles/Checkout.scss';

function CheckoutPopup(props) {

  return (props.trigger) ? (
    <div className='checkoutPopup'>
        <div className='checkoutPopup-inner'>
            <button className='close-btn' onClick={props.setTrigger}>X</button>
            {props.children}
            <form>

                <div>
                    <label>First </label>
                    <input type='text'/>
                    <label>Last </label>
                    <input type='text'/>
                </div>

                <div>
                    <label>Address </label>
                    <input type='text'/>
                    <br></br>
                    <label>City </label>
                    <input type='text'/>
                    <label>Zip </label>
                    <input type='text'/>
                </div>

                <div>
                    <label>State </label>
                    <select>
                        {data.state.map(item => (
                            <option value={item}>{item}</option>
                        ))}
                    </select> 
                    <label>Country </label>
                    <select>
                        {data.country.map(item => (
                            <option value={item}>{item}</option>
                        ))}
                    </select> 
                </div>

                <div>
                    <label>Card </label>
                    <input type='text'/>
                    <label>Security Code </label>
                    <input type='text'/>
                </div>

                <div>
                    <button className='orderBtn' onClick={props.checkout}>Place Order</button>
                </div>

            </form>
        </div>
    </div>
  ) : '';
}

export default CheckoutPopup