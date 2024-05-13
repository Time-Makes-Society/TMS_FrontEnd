import React, { useState } from 'react'

import like from '../../../assets/feedDetail/like.svg';
import Filllike from '../../../assets/feedDetail/fill-likes.png';
import comment from '../../../assets/feedDetail/comment.svg';
import FeedLoading from './FeedLoading';
import { Link } from 'react-router-dom';
function FeedContent({loading,likeStates,setLikeStates,handleLike,feedContent,feedState,contentSize,commentState,handleComment}) {
  
  return (
    <div className='feedDetail-content-wrap'>
        <p className='feedDetail-content-header'>
          {feedContent.title}
        </p>
        <p className='feedDetail-content-date'>
          입력
          <span style={{ marginLeft: '7px', marginRight: '7px' }}>{feedContent.createdDate}</span>
          
          <span className='feedDetail-content-articlestate'>
            {feedState ? '기사요약' : '기사원문'}
          </span>
        </p>
        <p className='feedDetail-content-reporter'>
          {feedContent.reporter}
        </p>
        <div className='like-comment-wrap'>
          <img src={likeStates?.liked ? Filllike : like} alt='like-image' onClick={()=>handleLike()}/>
          <span>{likeStates?.likeCount}</span>
          <div onClick={handleComment} className='comment'>
            <img src={comment} alt='comment-image'/>
            <span>댓글보기</span>
          </div>
          
        </div>
        <div className='feedDetail-content-image' style={{backgroundImage:`url(${feedContent.image})`}}>

        </div>
        <p className={`${contentSize ? 'feedDetail-content-thebody active' : 'feedDetail-content-thebody'}`}>
          {loading&&feedState? <FeedLoading/> :feedContent.content}
        </p>
      </div>
  )
}

export default FeedContent