import React from 'react';
import data from '../allstates.json';
import '../styles/Account.scss';

function AccountPopup(props) {

    function handleClickOutside() {

    }

  return (props.trigger) ? (
    <div className='accountPopup'>
        <div className='accountPopupBg' onClick={props.setTrigger}></div>
        <div className='accountPopupInner' >
            <button className='closeBtn' onClick={props.setTrigger}>X</button>
            <form className='login'>
                <h2> Login </h2>
                <div >
                    <label>Username</label>
                    <br/>
                    <input type='text'/>
                    <br/>
                    <label>Password</label>
                    <br/>
                    <input type='text'/>
                </div>
            </form>

            <form className='createAccount'>
                <h2> Create Account </h2>
                <div >
                    <label>Email </label>
                    <br/>
                    <input type='text'/>
                    <br/>
                    <label>Username</label>
                    <br/>
                    <input type='text'/>
                    <br/>
                    <label>Password</label>
                    <br/>
                    <input type='text'/>
                </div>
            </form>

            <div>
                <button className='loginBtn' onClick={props.login}>Login</button>
            </div>
        </div>
    </div>
  ) : '';
}

export default AccountPopup