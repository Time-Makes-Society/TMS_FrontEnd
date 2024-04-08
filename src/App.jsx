import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './scss/style.scss';
import Start from './components/Start/Start'
import Signup from './components/Signup/Signup';
import Login from './components/Login/Login';

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Start />} />
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
