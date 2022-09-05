import React, { useState } from 'react';
import '../styles/Account.scss';

function AccountPopup(props) {

    const [regEmail, setRegEmail] = useState('');
    const [regPass, setRegPass] = useState('');
    
    const [logEmail, setLogEmail] = useState('');
    const [logPass, setLogPass] = useState('');

    function renderError() {
        if(props.error != null) {
            return <h3>{props.error}</h3>
        } else {
            return '';
        }
    }
    if(props.user == undefined) {
        return (props.trigger) ? (
            <div className='accountPopup'>
                <div className='accountPopupBg' onClick={props.setTrigger}></div>
                <div className='accountPopupInner' >
                    <button className='closeBtn' onClick={props.setTrigger}>X</button>
                    <form className='login'>
                        <h2> Login </h2>
                        <div >
                            {renderError()}
                            <label>Email</label>
                            <br/>
                            <input type='text' onChange={(event) =>{
                                setLogEmail(event.target.value)}}/>
                            <br/>
                            <label>Password</label>
                            <br/>
                            <input type='text' onChange={(event) =>{
                                setLogPass(event.target.value)}}/>
                        </div>
                        <div>
                        <button className='loginBtn'
                            onClick={() => {props.login(logEmail, logPass)}}>
                            Login
                        </button>
                    </div>
                    </form>

                    <form className='createAccount'>
                        <h2> Create Account </h2>
                        <div >
                            <label>Email </label>
                            <br/>
                            <input type='text' onChange={(event) =>{
                                setRegEmail(event.target.value)}}/>
                            <br/>
                            <label>Password</label>
                            <br/>
                            <input type='text' onChange={(event) =>{
                                setRegPass(event.target.value)}}/>
                        </div>
                        <div>
                        <button className='registerBtn'
                            onClick={() => {props.register(regEmail, regPass)}}>
                            Register
                        </button>
                    </div>
                    </form>      
                </div>
            </div>
        ) : '';
    } else {
        return (props.trigger) ? (
        <div className='accountPopup'>
            <div className='accountPopupBg' onClick={props.setTrigger}></div>
            <div className='accountPopupInner' >
                <button className='closeBtn' onClick={props.setTrigger}>X</button>
                <h1> {props.user.email} <br/> is logged in. </h1>
                <button className='logoutBtn' onClick={props.logout}>Logout</button>
            </div>
        </div>
        ) : '';
    }
}

export default AccountPopup