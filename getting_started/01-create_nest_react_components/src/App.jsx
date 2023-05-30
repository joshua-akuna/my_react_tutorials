import './App.css'
import { Route, Routes } from 'react-router-dom'

import Home from './pages/home'
import AboutMe from './pages/about_me'

export default function App(){
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about_me' element={<AboutMe />}/>
      </Routes>
    </div>
  )
}
