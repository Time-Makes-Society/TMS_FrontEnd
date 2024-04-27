import axios from 'axios'
import React, { useEffect, useState } from 'react'

const dummydata = [
  { id: 1, name: '집수리오형제', content: '달려드는 독보적의 바닥이듯 세습에 폭락하나' },
  { id: 2, name: '독수리오년째', content: '달려드는 독보적의 지극히 바닥이듯 세습에 폭락' },
]
function CommentModal({ articleId }) {
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
  }, [commentData,buttonState])
  const toggleButton = (title) => {
    setButtonState(title)
  }
  return (
    <div className='commentModal-wrap'>
      <div className='header-wrap'>
        <div className='header-bar-wrap'>
          <span className='header-bar' />
        </div>
        <h1 className='header'>댓글</h1>
        <div className='button-wrap'>
          <button
            className={`${buttonState === '인기순' ? 'button active' : 'button'}`}
            onClick={() =>toggleButton('인기순')}
          >인기순</button>
          <button
            className={`${buttonState === '최신순' ? 'button active' : 'button'}`}
            onClick={() =>toggleButton('최신순')}
          >최신순</button>
        </div>
      </div>
      <span className='line'/>
      <div className='content-wrap'>
        {commentData.map((comment, index) => (
          <div className='content'>{comment.name} </div>
        ))}
      </div>
    </div>
  )
}

export default CommentModal