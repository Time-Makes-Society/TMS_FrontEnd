import React, { useEffect, useState } from 'react'
import Footer from '../common/Footer'

import Scrab from '../../assets/feed/scrab.svg';
import Option from '../../assets/feed/option.svg';
const dummydata = [
  { id: 1, imageUrl: 'https://imgnews.pstatic.net/image/015/2024/04/16/0004973630_001_20240416184701028.jpg?type=w647', title: '달려드는 독보적인 지극히 바닥이듯 세습에 폭락하나 개혁하네, 그러나 그 관점인 정중하다', publisher: '한겨레' },
  { id: 2, imageUrl: 'https://imgnews.pstatic.net/image/015/2024/04/16/0004973630_001_20240416184701028.jpg?type=w647', title: '달려드는 독보적인 지극히 바닥이듯 세습에 폭락하나 개혁하네, 그러나 그 관점인 정중하다', publisher: 'sbs' },
  { id: 3, imageUrl: 'https://imgnews.pstatic.net/image/015/2024/04/16/0004973630_001_20240416184701028.jpg?type=w647', title: '달려드는 독보적인 지극히 바닥이듯 세습에 폭락하나 개혁하네, 그러나 그 관점인 정중하다', publisher: 'mbc' },
  { id: 4, imageUrl: 'https://imgnews.pstatic.net/image/015/2024/04/16/0004973630_001_20240416184701028.jpg?type=w647', title: '달려드는 독보적인 지극히 바닥이듯 세습에 폭락하나 개혁하네, 그러나 그 관점인 정중하다', publisher: 'kbs' },
  { id: 5, imageUrl: 'https://imgnews.pstatic.net/image/015/2024/04/16/0004973630_001_20240416184701028.jpg?type=w647', title: '달려드는 독보적인 지극히 바닥이듯 세습에 폭락하나 개혁하네, 그러나 그 관점인 정중하다', publisher: 'jtbc' },
  { id: 6, imageUrl: 'https://imgnews.pstatic.net/image/015/2024/04/16/0004973630_001_20240416184701028.jpg?type=w647', title: '달려드는 독보적인 지극히 바닥이듯 세습에 폭락하나 개혁하네, 그러나 그 관점인 정중하다', publisher: '조선일보' },
  { id: 7, imageUrl: 'https://imgnews.pstatic.net/image/015/2024/04/16/0004973630_001_20240416184701028.jpg?type=w647', title: '달려드는 독보적인 지극히 바닥이듯 세습에 폭락하나 개혁하네, 그러나 그 관점인 정중하다', publisher: '서울신문' },
]
function Feed() {
  const [feedState, setFeedState] = useState();
  const [liveFeedList, setLiveFeedList] = useState([]);

  const handleFeedState = (state) => {
    setFeedState(state);
  }
  useEffect(() => {
    // - api통신 -
    
    setLiveFeedList(dummydata)
  }, [])

  return (
    <div className='feed-wrap'>
      <div className='feed-header-wrap'>
        <button className={feedState === '실시간' ? `feed-header active` : 'feed-header'} onClick={() => handleFeedState('실시간')}>실시간</button>
        <button className={feedState === '추천' ? `feed-header active` : 'feed-header'} onClick={() => handleFeedState('추천')}>추천</button>
        <button className={feedState === '스크랩' ? `feed-header active` : 'feed-header'} onClick={() => handleFeedState('스크랩')}>스크랩</button>
        <span className='header-bar' />
      </div>
      <div className='feed-content-wrap'>
        {liveFeedList.map((feed, index) => (
          <div className='feed-content'>
            <img src={feed.imageUrl} className='feed-image' alt='iamgeUrl' /> 
            <div className='feed-desc-wrap'>
              <p className='feed-desc-title'>{feed.title}</p>
              <p className='feed-desc-publisher'>{feed.publisher}</p>
              <img src={Scrab} className='scrab' alt='scrab-image'/>
              <img src={Option} className='option' alt='option-image'/>
            </div>
            
          </div>
        ))}
      </div>

      <Footer footerState={'feed'} />
    </div>
  )
}

export default Feed