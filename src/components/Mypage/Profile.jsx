import React from 'react';

import modified from '../../assets/mypage/modified.svg';
function Profile({userInfo}) {
  return (
    <div className='profile-wrap'>
        <span className='profile-image'/>
        <div className='profile-nickname-wrap'>
          <div className='profile-name-wrap'>
            <h2>{userInfo.name}</h2>
            <img src={modified} alt='modified-image'/>
          </div>
          <p>{userInfo.nickname}</p>
        </div>
      </div>
  )
}

export default Profile