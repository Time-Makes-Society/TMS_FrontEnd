import React from 'react';

import backward from '../../assets/backward.svg';
const dummydata=[
  {id:1,title:'달려드는 독보적의 지극히 바딕이듯 세습에 폭락하냐 개혁하네.'},
  
]
function FeedDetail({headerName,id}) {

  return (
    <>
    <div className='feedDetail-header-wrap'>
        <img src={backward} className='backward' alt='backward-image' />
        <p className='feedDetail-headername'>실시간</p>
    </div>
    <div className='feedDetail-content-wrap'>
        <p className='feedDetail-content-header'>
            달려드는 독보적의 지극히 바딕이듯 세습에 폭락하냐 개혁하네.
        </p>
    </div>
    </>
    
  )
}

export default FeedDetail