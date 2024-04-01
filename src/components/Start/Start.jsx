import React, { useState } from 'react';
import Tms from '../../assets/start/LOGO.svg';

function Start() {
    const [loginState,setLoginState] = useState(false)
    const handleLogin = () => {
        setLoginState(!loginState)
    }
    console.log('loginstate', loginState)
  return (
    <div className='start-wrap'>
        <img src={Tms} className='start-logo' alt='Tms-image' />
        <button type='button' className='login-button' onClick={handleLogin}>로그인</button>
        <button type='button' className='signup-button'>회원가입</button>
    </div>
  )
}

export default Start