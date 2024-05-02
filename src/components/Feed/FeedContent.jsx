import React from 'react'

import Scrab from '../../assets/feed/scrab.svg';
import Option from '../../assets/feed/option.svg';
function FeedContent({feed,onClick}) {
    return (
        <div className='feed-content' >
            <img src={feed.image} className='feed-image' alt='iamgeUrl' onClick={onClick}/>
            <div className='feed-desc-wrap'>
                <p className='feed-desc-title'>{feed.title}</p>
                <p className='feed-desc-publisher'>{feed.category}</p>
                <img src={Scrab} className='scrab' alt='scrab-image' />
                <img src={Option} className='option' alt='option-image' />
            </div>

        </div>
    )
}

export default FeedContent