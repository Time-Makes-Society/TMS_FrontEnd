import axios from 'axios';
import React, { useEffect, useState } from 'react';

import option from '../../assets/option.svg';
import profileimage from '../../assets/playing-guitar.png';
import like from '../../assets/feedDetail/like.svg';
const dummydata = [
  { id: 1, name: '집수리오형제', content: '달려드는 독보적의 바닥이듯 세습에 폭락하나' },
  { id: 2, name: '독수리오년째', content: '달려드는 독보적의 지극히 바닥이듯 세습에 폭락' },
  { id: 3, name: '집수리오형제', content: '달려드는 독보적의 바닥이듯 세습에 폭락하나' },
  { id: 4, name: '독수리오년째', content: '달려드는 독보적의 지극히 바닥이듯 세습에 폭락' },
  { id: 5, name: '집수리오형제', content: '달려드는 독보적의 바닥이듯 세습에 폭락하나' },
  { id: 6, name: '독수리오년째', content: '달려드는 독보적의 지극히 바닥이듯 세습에 폭락' },
  { id: 7, name: '집수리오형제', content: '달려드는 독보적의 바닥이듯 세습에 폭락하나' },
  { id: 8, name: '독수리오년째', content: '달려드는 독보적의 지극히 바닥이듯 세습에 폭락' },
  { id: 9, name: '집수리오형제', content: '달려드는 독보적의 바닥이듯 세습에 폭락하나' },
  { id: 10, name: '독수리오년째', content: '달려드는 독보적의 지극히 바닥이듯 세습에 폭락' },
  { id: 11, name: '집수리오형제', content: '달려드는 독보적의 바닥이듯 세습에 폭락하나' },
  { id: 12, name: '독수리오년째', content: '달려드는 독보적의 지극히 바닥이듯 세습에 폭락' },
]
function CommentModal({ articleId, handleComment }) {
  const [commentData, setCommentData] = useState([]);
  const [buttonState, setButtonState] = useState('인기순');

  useEffect(() => {
    const fetchComment = async () => {
      try {
        //const response = await axios.get('comment api')
        //setCommentData(response.data);
        setCommentData(dummydata);
      }
      catch (error) {
        new Error(error)
      }
    }
    fetchComment();
  }, [commentData, buttonState])
  const toggleButton = (title) => {
    setButtonState(title)
  }
  return (
    <>
      <div className='commentModal-wrap'>
        <div className='header-wrap'>
          <div className='header-bar-wrap'>
            <span className='header-bar' onClick={handleComment} />
          </div>
          <h1 className='header'>댓글</h1>
          <div className='button-wrap'>
            <button
              className={`${buttonState === '인기순' ? 'button active' : 'button'}`}
              onClick={() => toggleButton('인기순')}
            >인기순</button>
            <button
              className={`${buttonState === '최신순' ? 'button active' : 'button'}`}
              onClick={() => toggleButton('최신순')}
            >최신순</button>
          </div>
        </div>
        <span className='line' />
        <div className='content-wrap'>
          {commentData.map((comment, index) => (
            <div className='content' key={index}>
              <div className='profile-image' style={{ backgroundImage: `url(${profileimage})` }} />
              <div className='comment-wrap'>
                <p className='nickname'>
                  {comment.name}
                  <img src={option} className='option' />
                </p>
                <p className='text'>{comment.content}</p>
              </div>

            </div>
          ))}


        </div>

      </div>

      <div className='comment-footer'>
        <span className='profile' style={{ backgroundImage: `url(${profileimage})` }} />
        <input className='input' placeholder='댓글추가...' />
        <img src={like} className='like' alt='like-image' />
      </div>
    </>

  )
}

export default CommentModal