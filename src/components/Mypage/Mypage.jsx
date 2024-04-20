import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Footer from '../common/Footer';
import Profile from './Profile';

import option from '../../assets/mypage/option.svg';
import backward from '../../assets/backward.svg';
import infoCircle from '../../assets/mypage/info-circle-line.svg';
function Mypage() {
  const [userInfo, setUserInfo] = useState({
    name: '임형준',
    nickname: 'LHJ',
    time: "538",
  })
  useEffect(() => {
    // -- userInfo api 통신 코드 -- 
    /*const fetchUserInfo = async() => {
      try{
        const response = await axios.get('유저api');
        setUserInfo(response.data);
      }
      catch(error){
        new Error(error);
      }
    }
    fetchUserInfo();*/
  }, [])
  return (
    <>
      <div className='mypage-header-wrap'>
        <Link to={'/home'}><img src={backward} alt='backward-image' /> </Link>
        <h1>마이페이지</h1>
        <img src={option} className='option' alt='option-image' />
      </div>
      <Profile userInfo={userInfo} />
      <div className='statistics-bar-wrap'>
        <div className='statistics-header-wrap'>
          <div className='header-title'>
            <p>{userInfo.name}님은</p>
            <p> <span className='time'>{userInfo.time}분</span> 절약했어요!</p>
          </div>
          <img src={infoCircle} alt='infoCircle-image' />
        </div>
        <div className='bar-wrap'>
          
        </div>
      </div>
      <Footer footerState={'user'} />
    </>
  )
}

export default Mypage