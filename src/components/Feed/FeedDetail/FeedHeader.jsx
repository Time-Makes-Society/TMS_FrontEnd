import React from 'react'

import backward from '../../../assets/backward.svg';
function FeedHeader() {
    return (
        <div className='feedDetail-header-wrap'>
            <img src={backward} className='backward' alt='backward-image' />
            <p className='feedDetail-headername'>실시간</p>
        </div>
    )
}

export default FeedHeader