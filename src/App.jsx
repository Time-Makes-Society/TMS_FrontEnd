import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './scss/style.scss';
import Start from './components/Start/Start'
import Signup from './components/Signup/Signup';

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Start />} />
        <Route path='/signup' element={<Signup/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
