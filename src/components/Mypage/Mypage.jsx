import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux';

import Footer from '../common/Footer';
import Profile from './Profile';
import { loginActions } from '../../store/Login';
import option from '../../assets/mypage/option.svg';
import backward from '../../assets/backward.svg';
import infoCircle from '../../assets/mypage/info-circle-line.svg';
import Bar from './Bar';
import Top from './Top';
const dummydata = [
  {
    date:"mon",
    summary:"3:00",
    original:'6분',
  },
  {
    date:"tue",
    summary:"6:00",
    original:'6분',
  },
  {
    date:"wed",
    summary:"8:00",
    original:'6분',
  },
  {
    date:"thu",
    summary:"4:00",
    original:'6분',
  },
  {
    date:"fri",
    summary:"15:00",
    original:'6분',
  },
  {
    date:"sat",
    summary:"6:00",
    original:'6분',
  },
  {
    date:"sun",
    summary:"4:00",
    original:'6분',
  },
];
const top4data=[
  {id:1, category:'It', percentage:45},
  {id:2, category:'경제', percentage:30},
  {id:3, category:'엔터', percentage:20},
  {id:4, category:'정치', percentage:5},
]
function Mypage() {
  const [userInfo, setUserInfo] = useState({
    name: '임형준',
    nickname: 'LHJ',
    time: "538",
    
  })
  const loginId = localStorage.getItem('loginId');
  const password = localStorage.getItem('password');
  const memberName = localStorage.getItem('memberName');
  const navigate = useNavigate();
  const dispatch = useDispatch();
  console.log('redux login state:',loginId);
  console.log('redux password state', password);
  const handleLogout=async()=>{
    // - api 통신 코드 -
    // try{
    //   await axios.post('/api/logout',{
    //     "loginId": loginId,
    //     "password": password
    //   })
    // }
    // catch(error){
    //   new Error(error)
    // }
    localStorage.clear();
    dispatch(loginActions.logout());
    navigate('/login');
  }
  
  

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
      <Profile userInfo={userInfo} handleLogout={handleLogout}/>
      <Bar userInfo={userInfo} dummydata={dummydata}/>
      <Top top4data={top4data}/>
      <Footer footerState={'user'} />
    </>
  )
}

export default Mypage