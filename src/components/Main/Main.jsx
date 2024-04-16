import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";

import Tms from '../../assets/main/T_M_S.svg';
import Footer from '../common/Footer';
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


    setLiveArticle(dummydata)
    setRecommendArticle(dummydata)
  }, [])
  console.log(liveArticle)
  return (
    <div className='main-wrap'>
      <Link to='/home'><img src={Tms} alt='tms-image' className='tms-logo' /></Link>

      <h3 className='title'>실시간 뉴스 기사</h3>
      <div className='live-wrap'>
        {liveArticle.map((article, index) => (
          <div key={index} className='live-content-wrap'>
            <img src={article.imageUrl} alt="News Image" className='live-content-image' />
            <div className='live-content-title-wrap'>
              <h1 >{article.title}</h1>
              <p >{article.newsCategory}</p>
            </div>
          </div>

        ))}
      </div>
      <h3 className='title'>추천기사</h3>
      <div className='recommend-wrap'>
        {recommendArticle.map((article, index) => (
          <div key={index} className='recommend-content-wrap'>
            <img src={article.imageUrl} alt="News Image" className='recommend-content-image' />
            <div className='recommend-content-title-wrap'>
              <h1 >{article.title}</h1>
              <p >{article.newsCategory}</p>
            </div>
          </div>

        ))}
      </div>
      <Footer footerState={'home'}/>
    </div>
  )
}

export default Main