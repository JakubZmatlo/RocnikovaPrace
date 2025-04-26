import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import {Toaster} from "react-hot-toast";
import Footer from './components/Footer';
import { useAppContext } from './context/AppContext';
import Login from './components/Login';

const App = () => {
  const {showUserLogin} = useAppContext()

  return (
    <div>
      <Navbar/>
      {showUserLogin ? <Login/> : null}
      <Toaster/>
      <div className='px-6 md:px-16 lg:px-24 xl:px-32'>
        <Routes>
          <Route path='/' element={<Home/>}/>
        </Routes>
      </div>
      <Footer/>
    </div>
  )
}

export default App
