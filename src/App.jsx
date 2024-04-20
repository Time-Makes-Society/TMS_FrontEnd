import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './scss/style.scss';
import Start from './components/Start/Start'
import Signup from './components/Signup/Signup';
import Login from './components/Login/Login';
import Category from './components/category/Category';
import TimeSet from './components/Timeset/TimeSet';
import Main from './components/Main/Main'
import Feed from './components/Feed/Feed';
import Mypage from './components/Mypage/Mypage';
import FeedDetail from './components/Feed/FeedDetail/FeedDetail';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Start />} />
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/category' element={<Category/>}/>
        <Route path='/timeset' element={<TimeSet/>}/>
        <Route path = '/home' element={<Main/>}/>
        <Route path = '/feed' element={<Feed/>}/>
        <Route path = '/mypage' element={<Mypage/>}/>
        <Route path ='/feed_detail/:id' element={<FeedDetail/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
