import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
// import {Home, Services, Menu, Contact} from './components/pages'
import Home from './pages/Home'
import Menu from './pages/Menu'
import Services from './pages/Services'
import Contact from './pages/Contact'


function App() {

  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/Menu' element={<Menu />}></Route>
      <Route path='/Services' element={<Services />}></Route>
      <Route path='/Contact' element={<Contact />}></Route>
    </Routes>
    </>
  )
}

export default App
