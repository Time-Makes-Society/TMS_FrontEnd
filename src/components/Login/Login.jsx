import React, { useState } from 'react';
import {useDispatch} from 'react-redux';

import backWord from '../../assets/backward.svg';
import Tms from '../../assets/start/TmsLogo.svg';
import { Link,useNavigate } from 'react-router-dom';
import { authActions } from '../../store/auth';
import axios from 'axios';
function Login() {
  const [enterValuse, setEnterValues] = useState({
    Id: '',
    Password: '',
  })
  const dispatch = useDispatch()
  const [showPassWord,setShowPassWord] = useState(false);
  const navigate=useNavigate()
  const handleBack=()=>{
    navigate('/')
  }
  const handleLogin=()=>{
    // -- Api post 연결 code --
    dispatch(authActions.login());
    navigate('/category');
  }
  const handleShowPassWord=()=>{
    setShowPassWord(!showPassWord)
  }
  return (
    <>
      <div className='login-header-wrap'>
        <img src={backWord} className='backword' alt='backword-img' onClick={handleBack}/>
        <p className='login-header'>로그인</p>
      </div>

      <form className='login-content-wrap' onSubmit={handleLogin}>
        <img src={Tms} className='login-logo' alt='TmsLogo' />
        <input placeholder='아이디' className='login-input' />
        <input placeholder='비밀번호' type={showPassWord? 'text':'password'} className='login-input' />
        <label className='login-checkbox'>
          <input type="checkbox" className={`pw-checkbox ${showPassWord ? 'active' : ''} `} checked={showPassWord} onClick={handleShowPassWord} /> 비밀번호 보기
        </label>
        <button type='submit' className='login-submit' >로그인</button>
        <Link to='/signup' className='goto-signup'>회원가입</Link>
      </form>
    </>

  )
}

export default Login