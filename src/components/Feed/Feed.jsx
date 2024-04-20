import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
import Footer from '../common/Footer'
import Scrab from '../../assets/feed/scrab.svg';
import Option from '../../assets/feed/option.svg';
import FeedContent from './FeedContent';

const livedummydata = [
  { id: 1, imageUrl: 'https://imgnews.pstatic.net/image/015/2024/04/16/0004973630_001_20240416184701028.jpg?type=w647', title: '달려드는 독보적인 지극히 바닥이듯 세습에 폭락하나 개혁하네, 그러나 그 관점인 정중하다', publisher: '한겨레' },
  { id: 2, imageUrl: 'https://imgnews.pstatic.net/image/015/2024/04/16/0004973630_001_20240416184701028.jpg?type=w647', title: '달려드는 독보적인 지극히 바닥이듯 세습에 폭락하나 개혁하네, 그러나 그 관점인 정중하다', publisher: 'sbs' },
  { id: 3, imageUrl: 'https://imgnews.pstatic.net/image/015/2024/04/16/0004973630_001_20240416184701028.jpg?type=w647', title: '달려드는 독보적인 지극히 바닥이듯 세습에 폭락하나 개혁하네, 그러나 그 관점인 정중하다', publisher: 'mbc' },
  { id: 4, imageUrl: 'https://imgnews.pstatic.net/image/015/2024/04/16/0004973630_001_20240416184701028.jpg?type=w647', title: '달려드는 독보적인 지극히 바닥이듯 세습에 폭락하나 개혁하네, 그러나 그 관점인 정중하다', publisher: 'kbs' },
  { id: 5, imageUrl: 'https://imgnews.pstatic.net/image/015/2024/04/16/0004973630_001_20240416184701028.jpg?type=w647', title: '달려드는 독보적인 지극히 바닥이듯 세습에 폭락하나 개혁하네, 그러나 그 관점인 정중하다', publisher: 'jtbc' },
  { id: 6, imageUrl: 'https://imgnews.pstatic.net/image/015/2024/04/16/0004973630_001_20240416184701028.jpg?type=w647', title: '달려드는 독보적인 지극히 바닥이듯 세습에 폭락하나 개혁하네, 그러나 그 관점인 정중하다', publisher: '조선일보' },
  { id: 7, imageUrl: 'https://imgnews.pstatic.net/image/015/2024/04/16/0004973630_001_20240416184701028.jpg?type=w647', title: '달려드는 독보적인 지극히 바닥이듯 세습에 폭락하나 개혁하네, 그러나 그 관점인 정중하다', publisher: '서울신문' },
]
const recodummydata = [
  { id: 1, imageUrl: 'https://imgnews.pstatic.net/image/015/2024/04/16/0004973630_001_20240416184701028.jpg?type=w647', title: '이틀간 빠졌던 원 달러 환율... 다시 뜀박질', publisher: '한겨레' },
  { id: 2, imageUrl: 'https://imgnews.pstatic.net/image/015/2024/04/16/0004973630_001_20240416184701028.jpg?type=w647', title: '달려드는 독보적인 지극히 바닥이듯 세습에 폭락하나 개혁하네, 그러나 그 관점인 정중하다', publisher: 'sbs' },
  { id: 3, imageUrl: 'https://imgnews.pstatic.net/image/015/2024/04/16/0004973630_001_20240416184701028.jpg?type=w647', title: '달려드는 독보적인 지극히 바닥이듯 세습에 폭락하나 개혁하네, 그러나 그 관점인 정중하다', publisher: 'mbc' },
  { id: 4, imageUrl: 'https://imgnews.pstatic.net/image/015/2024/04/16/0004973630_001_20240416184701028.jpg?type=w647', title: '달려드는 독보적인 지극히 바닥이듯 세습에 폭락하나 개혁하네, 그러나 그 관점인 정중하다', publisher: 'kbs' },
  { id: 5, imageUrl: 'https://imgnews.pstatic.net/image/015/2024/04/16/0004973630_001_20240416184701028.jpg?type=w647', title: '달려드는 독보적인 지극히 바닥이듯 세습에 폭락하나 개혁하네, 그러나 그 관점인 정중하다', publisher: 'jtbc' },
  { id: 6, imageUrl: 'https://imgnews.pstatic.net/image/015/2024/04/16/0004973630_001_20240416184701028.jpg?type=w647', title: '달려드는 독보적인 지극히 바닥이듯 세습에 폭락하나 개혁하네, 그러나 그 관점인 정중하다', publisher: '조선일보' },
  { id: 7, imageUrl: 'https://imgnews.pstatic.net/image/015/2024/04/16/0004973630_001_20240416184701028.jpg?type=w647', title: '달려드는 독보적인 지극히 바닥이듯 세습에 폭락하나 개혁하네, 그러나 그 관점인 정중하다', publisher: '서울신문' },
]
const scrabdummydata = [
  { id: 1, imageUrl: 'https://imgnews.pstatic.net/image/015/2024/04/16/0004973630_001_20240416184701028.jpg?type=w647', title: '쭉쭉 오르던 개미 투자자 빛투 ... 하락장에 소폭 줄었다', publisher: '한겨레' },
  { id: 2, imageUrl: 'https://imgnews.pstatic.net/image/015/2024/04/16/0004973630_001_20240416184701028.jpg?type=w647', title: '달려드는 독보적인 지극히 바닥이듯 세습에 폭락하나 개혁하네, 그러나 그 관점인 정중하다', publisher: 'sbs' },
  { id: 3, imageUrl: 'https://imgnews.pstatic.net/image/015/2024/04/16/0004973630_001_20240416184701028.jpg?type=w647', title: '달려드는 독보적인 지극히 바닥이듯 세습에 폭락하나 개혁하네, 그러나 그 관점인 정중하다', publisher: 'mbc' },
  { id: 4, imageUrl: 'https://imgnews.pstatic.net/image/015/2024/04/16/0004973630_001_20240416184701028.jpg?type=w647', title: '달려드는 독보적인 지극히 바닥이듯 세습에 폭락하나 개혁하네, 그러나 그 관점인 정중하다', publisher: 'kbs' },
  { id: 5, imageUrl: 'https://imgnews.pstatic.net/image/015/2024/04/16/0004973630_001_20240416184701028.jpg?type=w647', title: '달려드는 독보적인 지극히 바닥이듯 세습에 폭락하나 개혁하네, 그러나 그 관점인 정중하다', publisher: 'jtbc' },
  { id: 6, imageUrl: 'https://imgnews.pstatic.net/image/015/2024/04/16/0004973630_001_20240416184701028.jpg?type=w647', title: '달려드는 독보적인 지극히 바닥이듯 세습에 폭락하나 개혁하네, 그러나 그 관점인 정중하다', publisher: '조선일보' },
  { id: 7, imageUrl: 'https://imgnews.pstatic.net/image/015/2024/04/16/0004973630_001_20240416184701028.jpg?type=w647', title: '달려드는 독보적인 지극히 바닥이듯 세습에 폭락하나 개혁하네, 그러나 그 관점인 정중하다', publisher: '서울신문' },
]
function Feed() {
  const [feedState, setFeedState] = useState('실시간');
  const [feedList, setFeedList] = useState([]);

  const handleFeedState = (state) => {
    setFeedState(state);
  }
  useEffect(() => {
    // - api통신 -
    // const fetchFeed = async() => {
    //   try{
    //     const response = await axios.get('api');
    //     setFeedList(response.data);
    //   }
    //   catch(error){
    //     new Error(error)
    //   }
      
    // }
    // fetchFeed();
    if(feedState==='실시간'){
      setFeedList(livedummydata);
    }
    else if(feedState==='추천'){
      setFeedList(recodummydata);
    }
    else{
      setFeedList(scrabdummydata);
    }
    
  }, [feedState])

  return (
    <div className='feed-wrap'>
      <div className='feed-header-wrap'>
        <button className={feedState === '실시간' ? 'feed-header active' : 'feed-header'} onClick={() => handleFeedState('실시간')}>실시간</button>
        <button className={feedState === '추천' ? 'feed-header active' : 'feed-header'} onClick={() => handleFeedState('추천')}>추천</button>
        <button className={feedState === '스크랩' ? 'feed-header active' : 'feed-header'} onClick={() => handleFeedState('스크랩')}>스크랩</button>
        
      </div>
      <div className='feed-content-wrap'>
        {feedList.map((feed, index) => (
          <FeedContent feed={feed}/>
        ))}
      </div>
      
        
      <Footer footerState={'feed'} />
    </div>
  )
}

export default Feed