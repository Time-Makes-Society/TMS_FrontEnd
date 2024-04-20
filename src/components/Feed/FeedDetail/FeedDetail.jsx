import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
//import axios from 'axios';


import backward from '../../../assets/backward.svg';
import FeedFooter from './FeedFooter';
import FeedContent from './FeedContent';
import FeedHeader from './FeedHeader';
const dummyOriginalData =
{
  id: 1,
  title: '달려드는 독보적의 지극히 바딕이듯 세습에 폭락하냐 개혁하네.',
  date: '2024/04/21',
  ImageUrl: 'https://imgnews.pstatic.net/image/015/2024/04/16/0004973630_001_20240416184701028.jpg?type=w647',
  content: '달려드는 독보적의 지극히 바딕이듯 세습에 폭락하냐 개혁하네.달려드는 독보적의 지극히 바딕이듯 세습에 폭락하냐 개혁하네.달려드는 독보적의 지극히 바딕이듯 세습에 폭락하냐 개혁하네.달려드는 독보적의 지극히 바딕이듯 세습에 폭락하냐 개혁하네.달려드는 독보적의 지극히 바딕이듯 세습에 폭락하냐 개혁하네.달려드는 독보적의 지극히 바딕이듯 세습에 폭락하냐 개혁하네.달려드는 독보적의 지극히 바딕이듯 세습에 폭락하냐 개혁하네.',
  reporter: '김승찬 기자',
  like: 5,
  comment_count: 2,
}
const dummySummaryData =
{
  id: 1,
  title: '달려드는 독보적의 지극히 바딕이듯 세습에 폭락하냐 개혁하네.',
  date: '2024/04/21',
  ImageUrl: 'https://imgnews.pstatic.net/image/015/2024/04/16/0004973630_001_20240416184701028.jpg?type=w647',
  content: '달려드는 독보적의 지극히 바딕이듯 세습에 폭락하냐 개혁하네.달려드는 독보적의 지극히 바딕이듯 세습에 폭락하냐 개혁하네.달려드는 독보적의 지극히 바딕이듯 세습에 폭락하냐 개혁하네. ',
  reporter: '김승찬 기자',
  like: 5,
  comment_count: 2,
}


function FeedDetail({ feedType }) {
  //feedType은 리덕스로 관리 -> 실시간, 추천 , 스크랩을 feedtype을 이용해서 렌더링
  const [feedContent, setFeedContent] = useState({});
  const [feedState, setFeedState] = useState(false);
  const [contentSize, setContentSize] = useState(false);
  const [commentState, setCommentState] = useState(false);
  const { id } = useParams();
  console.log("feedDetail:", id)

  const handleFeedState = () => {
    setFeedState(!feedState);
  }
  const handleContentSizeUpDown = () => {
    setContentSize(!contentSize);
  }
  useEffect(() => {
    if(feedState){
      // --임시 API 통신 code--
       // const fetchFeedDetail = async() => {
    //   try{
    //     const response = await axios.get('요약api');
    //     setFeedContent(response.data)
    //   }
    //   catch(error){
    //     new Error(error)
    //   }
    // }
    // fetchFeedDetail();
      setFeedContent(dummySummaryData)
    }
    else{
      // --임시 API 통신 code--
       // const fetchFeedDetail = async() => {
    //   try{
    //     const response = await axios.get('원문api');
    //     setFeedContent(response.data)
    //   }
    //   catch(error){
    //     new Error(error)
    //   }
    // }
    // fetchFeedDetail();
      setFeedContent(dummyOriginalData)
    }
    
  }, [feedState])
  
  //뒤로가기 이미지는 사용자 기록에 따라 뒤로가기 되게끔 해야함.
  return (
    <>
      <FeedHeader/>
      <FeedContent feedState={feedState} feedContent={feedContent} contentSize={contentSize}/>
      <FeedFooter handleContentSizeUpDown={handleContentSizeUpDown} handleFeedState={handleFeedState} feedState={feedState}/>
    </>

  )
}

export default FeedDetail