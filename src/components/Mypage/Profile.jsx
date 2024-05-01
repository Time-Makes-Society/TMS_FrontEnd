import React from 'react';

import modified from '../../assets/mypage/modified.svg';

function Profile({ userInfo,handleLogout }) {
  
  return (
    <div className='profile-wrap'>
     
      <span className='profile-image' />

      <div className='profile-nickname-box-wrap'>
        <div className='profile-nickname-wrap'>
          <div className='profile-name-wrap'>
            <h2>{userInfo.name}</h2>
            <img src={modified} alt='modified-image' />
          </div>
          <p>{userInfo.nickname}</p>
        </div>

        <button className='logout' onClick={handleLogout}>로그아웃</button>
      </div>

    </div>
  )
}

export default Profile