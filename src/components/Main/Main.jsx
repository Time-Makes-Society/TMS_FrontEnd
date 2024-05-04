import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";
import { useDispatch, useSelector } from 'react-redux';

import Tms from '../../assets/main/T_M_S.svg';
import Footer from '../common/Footer';
import TimeModal from '../Modal/TimeModal';
import { timerActions } from '../../store/count';
const dummydata2 = [
  {
    "content": [
      {
        "id": "05952014-a5b8-41d0-9571-001dc1bf1744",
        "title": "[사설] 글로벌톱텐시티, 시민이 지켜보고 있다",
        "createdDate": "2024-04-18T16:44:00",
        "category": "정치",
        "image": "https://www.incheonilbo.com/image/logo/snslogo_20220103100817.png",
        "articleTime": "00:02:05"
      },
      {
        "id": "0620ac13-6ffb-4a46-9617-cd14ca59f7f9",
        "title": "“이스라엘, 이란 재반격 논의 중…핵시설 타격도 옵션” 전 모사드 정보국장",
        "createdDate": "2024-04-18T16:35:00",
        "category": "사회",
        "image": "https://nownews.seoul.co.kr/img/upload/2024/04/18/SSC_20240418163212.jpg",
        "articleTime": "00:03:08"
      },
      {
        "id": "06a2b2cb-2371-443c-a7b3-2739c8ef6404",
        "title": "이복현 금감원장, 대통령실 합류설 침묵…\"죄송하다\"",
        "createdDate": "2024-04-18T16:36:00",
        "category": "정치",
        "image": "http://www.newsprime.co.kr/data/photos/cdn/20240416/art_636413_1713423726.jpg",
        "articleTime": "00:01:41"
      },
      {
        "id": "095a3504-2a4d-4755-80b6-92940e6e5b0e",
        "title": "국립목포대·LG헬로비전, 업무협약식 개최",
        "createdDate": "2024-04-18T16:40:00",
        "category": "문화",
        "image": "https://cdn.enewstoday.co.kr/news/thumbnail/202404/2116624_918813_3049_v150.jpg",
        "articleTime": "00:01:52"
      },
      {
        "id": "0a9ded80-7e8a-4c60-9f1b-249afa35d8a1",
        "title": "칠리즈, K리그와 '2024 <b>경기</b> 득점공' 이벤트 진행",
        "createdDate": "2024-04-18T16:36:00",
        "category": "스포츠",
        "image": "https://newsimg.sedaily.com/2024/04/18/2D7YLNLFMJ_1.jpg?ver=2019",
        "articleTime": "00:01:38"
      }
    ],
    "pageable": {
      "pageNumber": 0,
      "pageSize": 5,
      "sort": {
        "empty": true,
        "unsorted": true,
        "sorted": false
      },
      "offset": 0,
      "paged": true,
      "unpaged": false
    },
    "last": false,
    "totalElements": 99,
    "totalPages": 20,
    "first": true,
    "size": 5,
    "number": 0,
    "sort": {
      "empty": true,
      "unsorted": true,
      "sorted": false
    },
    "numberOfElements": 5,
    "empty": false
  }
]
const dummydata = [
  { id: 1, title: "달려드는 독보적의 지극히 바닥이듯 세습에 폭락하냐", newsCategory: "IT", imageUrl: 'https://post-phinf.pstatic.net/MjAyNDA0MTVfMjk4/MDAxNzEzMTM2MTE1MTk3.SAs0PYBs-nvaVMHe4IakLMR22apTqTprEQvr5k9tfrYg.eZ5IiKAyIBwaJahTMPm87INyDuTvKJx5fe1_x3BJEY4g.JPEG/05.jpg?type=w1200' },
  { id: 2, title: "김승찬", newsCategory: "스포츠", imageUrl: 'https://post-phinf.pstatic.net/MjAyNDA0MTVfMjk4/MDAxNzEzMTM2MTE1MTk3.SAs0PYBs-nvaVMHe4IakLMR22apTqTprEQvr5k9tfrYg.eZ5IiKAyIBwaJahTMPm87INyDuTvKJx5fe1_x3BJEY4g.JPEG/05.jpg?type=w1200' },
  { id: 3, title: "박혜정", newsCategory: "해외", imageUrl: 'https://post-phinf.pstatic.net/MjAyNDA0MTVfMjk4/MDAxNzEzMTM2MTE1MTk3.SAs0PYBs-nvaVMHe4IakLMR22apTqTprEQvr5k9tfrYg.eZ5IiKAyIBwaJahTMPm87INyDuTvKJx5fe1_x3BJEY4g.JPEG/05.jpg?type=w1200' },
  { id: 4, title: "상명대학교", newsCategory: "경제", imageUrl: 'https://post-phinf.pstatic.net/MjAyNDA0MTVfMjk4/MDAxNzEzMTM2MTE1MTk3.SAs0PYBs-nvaVMHe4IakLMR22apTqTprEQvr5k9tfrYg.eZ5IiKAyIBwaJahTMPm87INyDuTvKJx5fe1_x3BJEY4g.JPEG/05.jpg?type=w1200' },
  { id: 5, title: "소프트웨어학과", newsCategory: "과학", imageUrl: 'https://post-phinf.pstatic.net/MjAyNDA0MTVfMjk4/MDAxNzEzMTM2MTE1MTk3.SAs0PYBs-nvaVMHe4IakLMR22apTqTprEQvr5k9tfrYg.eZ5IiKAyIBwaJahTMPm87INyDuTvKJx5fe1_x3BJEY4g.JPEG/05.jpg?type=w1200' },
]

function Main() {
  const [liveArticle, setLiveArticle] = useState([]);
  const [recommendArticle, setRecommendArticle] = useState([]);
  const dispatch = useDispatch();
  const timer = localStorage.getItem('timer');
  
  
  useEffect(() => {
    // - api통신코드 -
    // const fetchLiveArticle = async() =>{
    //   try{
    //     const response = await axios.get('/api');
    //     setLiveArticle(response.data);
    //   }
    //   catch(error){
    //     console.log(error);
    //   }
    // }
    // fetchLiveArticle();
    dispatch(timerActions.timer(timer))

    setLiveArticle(dummydata2)
    setRecommendArticle(dummydata2)
  }, [])
  

  return (
    <div className='main-wrap'>
      <Link to='/home'><img src={Tms} alt='tms-image' className='tms-logo' /></Link>

      <h3 className='title'>실시간 뉴스 기사</h3>
      <div className='live-wrap'>
        {liveArticle.length > 0 && liveArticle[0].content.map((article, index) => (
          <Link to={`/feed_detail/${article.id}`} key={article.id}>
            <div className='live-content-wrap' >
              <img src={article.image} alt="News Image" className='live-content-image' />
              <div className='live-content-title-wrap'>
                <h1 >{article.title}</h1>
                <p >{article.category}</p>
              </div>
            </div>
          </Link>


        ))}
      </div>
      <h3 className='title'>추천기사</h3>
      <div className='recommend-wrap'>
        {liveArticle.length > 0 && liveArticle[0].content.map((article, index) => (
          <Link key={article.id} to={`/feed_detail/${article.id}`}>
            <div key={article.id} className='recommend-content-wrap'>
              <img src={article.image} alt="News Image" className='recommend-content-image' />
              <div className='recommend-content-title-wrap'>
                <h1 >{article.title}</h1>
                <p >{article.newsCategory}</p>
              </div>
            </div>
          </Link>


        ))}
      </div>
      <TimeModal time={timer} />
      <Footer footerState={'home'} />
    </div>
  )
}

export default Main