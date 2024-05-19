import React, { useEffect, useState } from 'react';
import { Link, json, useNavigate, } from 'react-router-dom';
import axios from "axios";
import { useDispatch, useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import Tms from '../../assets/main/T_M_S.svg';
import Footer from '../common/Footer';
import TimeModal from '../Modal/TimeModal';
import { timerActions } from '../../store/count';
import { dummydata } from '../Feed/data';
import random_image from '../../assets/main/random.png';
import CategoryList from './CategoryList';
function Main() {
  const [liveArticle, setLiveArticle] = useState([]);
  const [recommendArticle, setRecommendArticle] = useState([]);
  const dispatch = useDispatch();
  const readArticles = useSelector(state => state.readArticle.readAriticleList)
  const timer = localStorage.getItem('timer');
  const category = localStorage.getItem('category');
  const navigate = useNavigate();
  console.log('timer', timer)
  console.log('category', category)
  useEffect(() => {
    // - api통신코드 -
    const fetchLiveArticle = async () => {
      try {
        const response = await axios.get('/api/articles');
        const response2 = await axios.get(`/api/articles/recommend?category=${category}&target=${timer}`)
        console.log("response2.data", response2.data)
        setLiveArticle(response.data.articles);
        setRecommendArticle(response2.data)
        console.log("fetchLivedata: ", response.data.articles)
      }
      catch (error) {
        console.log(error);
      }
    }
    fetchLiveArticle();
    dispatch(timerActions.timer(timer))
    console.log('read Articles List: ', readArticles)
    console.log('local storge 용량: ',JSON.stringify(localStorage).length)
  }, [])
  const handleGotoRandom = () => {
    const randomNumber = Math.floor(Math.random() * dummydata.length);
    const randomName = dummydata[randomNumber].name
    navigate(`/category_articles/${randomName}`)

  }

  return (
    <div className='main-wrap'>
      <Link to='/home'><img src={Tms} alt='tms-image' className='tms-logo' /></Link>

      <h3 className='title'>실시간 뉴스 기사</h3>
      <div className='live-wrap'>
        {console.log("livearticle 길이", liveArticle.length)}
        {liveArticle.map((article, index) => (
          <Link to={`/feed_detail/${'실시간'}/${article.id}`} key={article.id}>
            <div className='live-content-wrap' >
              <img src={article.image} alt="News Image" className='live-content-image' />
              <span className='time'>{article.articleTime}</span>
              <div className='live-content-title-wrap'>
                <h1 >{article.title}</h1>
                <p >{article.publisher}</p>
                <p className='category-name'>{article.category}</p>
              </div>
            </div>
          </Link>


        ))}
      </div>
      <h3 className='title'>카테고리별로 기사를 찾아보세요!</h3>
      <motion.ul
        initial="hidden"
        animate="visible"
        variants={{
          visible: { transition: { staggerChildren: 0.05 } }
        }}
        className='main-category-wrap'>
        {dummydata.map((item) => (
          <CategoryList item={item}/>
        ))}
      </motion.ul>

      <div className='main-random-wrap' onClick={handleGotoRandom}>
        <div className='main-random-text-wrap'>
          <p className='starttext'>어떤 기사를 읽어야 할지 모르겠다구요?</p>
          <p className='endtext'>TMS가 한 번 골라 볼게요!</p>
        </div>
        <img src={random_image} className='random-image' alt='random-image' />
      </div>

      <h3 className='title'>추천기사</h3>
      <div className='recommend-wrap'>
        {recommendArticle.map((article, index) => (
          <Link key={article.id} to={`/feed_detail/${'추천'}/${article.id}`}>
            <div key={article.id} className='recommend-content-wrap'>
              <img src={article.image} alt="News Image" className='recommend-content-image' />
              <span className='text-on-background'>{article.articleTime}</span>
              <div className='recommend-content-title-wrap'>
                <h1 >{article.title}</h1>
              </div>
              <p className='category-name'>{article.category}</p>
              <p>{article.publisher}</p>
              {readArticles?.includes(article.id) ? <p className='text-on-background active'>읽은 기사</p>: ''}
            </div>
          </Link>


        ))}
      </div>
      <TimeModal />
      <Footer footerState={'home'} />
    </div>
  )
}

export default Main