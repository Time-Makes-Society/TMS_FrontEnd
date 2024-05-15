import React from 'react';
import {ClipLoader} from "react-spinners";
const override = {
    display: 'block',
    margin: '0 auto',
    textAlign: 'center',
    color: '#fff',
};
function FeedLoading({isSimilar}) {
  return (
    <div className='loading'>
        <h3 style={{textAlign:'center'}}>기사 내용을 요약하고 있습니다..</h3>
        <ClipLoader
            cssOverride={override}
            speedMultiplier={0.8}
        />
    </div>
  )
}

export default FeedLoading