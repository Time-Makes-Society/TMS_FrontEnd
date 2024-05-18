import React, { useEffect, useState } from 'react'

import BookmarkEmpty from '../../assets/feed/bookmark-emptyy.svg';
import BookmarkFill from '../../assets/feed/bookmark-fill.svg';
import Option from '../../assets/feed/option.svg';
import { motion } from 'framer-motion';
import axios from 'axios';
function FeedContent({ feed, onClick, feedState, handleBookmark, bookmarkStates, setBookmarkStates }) {

    return (
        <div className='feed-content' >
            <img src={feed.image} className='feed-image' alt='iamgeUrl' onClick={onClick} />
            <span className='time'>{feed.articleTime}</span>
            <div className='feed-desc-wrap'>
                <p className='feed-desc-title'>{feed.title}</p>
                <div className='feed-desc-footer'>
                    <p className='feed-desc-publisher'>{feed.publisher}</p>
                    <p className='feed-desc-category'>{feed.category}</p>
                </div>

                <motion.img
                    whileHover={{ scale: 1.5 }}
                    transition={{ type: 'spring', stiffness: 500 }}
                    src={(feedState === '스크랩' ?
                        bookmarkStates[feed.uuidArticleId]?.state : bookmarkStates[feed.id]?.state) ? BookmarkFill : BookmarkEmpty}
                    className='scrab' alt='scrab-image' onClick={() => handleBookmark(feedState === '스크랩' ? feed.uuidArticleId : feed.id)} />




                <img src={Option} className='option' alt='option-image' />
            </div>

        </div>
    )
}

export default FeedContent