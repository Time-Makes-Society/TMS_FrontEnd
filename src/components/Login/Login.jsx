import React, { useState } from 'react';

import backWord from '../../assets/backward.svg';
import Tms from '../../assets/start/TmsLogo.svg';
import { Link,useNavigate } from 'react-router-dom';
function Login() {
  const [enterValuse, setEnterValues] = useState({
    Id: '',
    Password: '',
  })
  const [showPassWord,setShowPassWord] = useState(false);
  const navigate=useNavigate()
  const handleBack=()=>{
    navigate('/')
  }
  const handleLogin=()=>{
    // API연결 추가해야함
    navigate('/category')
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

      <form className='login-content-wrap'>
        <img src={Tms} className='login-logo' alt='TmsLogo' />
        <input placeholder='아이디' className='login-input' />
        <input placeholder='비밀번호' type={showPassWord? 'text':'password'} className='login-input' />
        <label className='login-checkbox'>
          <input type="checkbox" className={`pw-checkbox ${showPassWord ? 'active' : ''} `} checked={showPassWord} onClick={handleShowPassWord} /> 비밀번호 보기
        </label>
        <button type='submit' className='login-submit' onClick={handleLogin}>로그인</button>
        <Link to='/signup' className='goto-signup'>회원가입</Link>
      </form>
    </>

  )
}

export default Login