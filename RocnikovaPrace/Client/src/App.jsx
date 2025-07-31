import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home'
import {Toaster} from "react-hot-toast";
import Footer from './components/Footer/Footer';
import { useAppContext } from './context/AppContext';
import Login from './components/Login/Login';
import AllProducts from './pages/AllProducts/AllProducts';
import ProductCategory from './pages/ProductCategory/ProductCategory';
import ProductDetails from './pages/ProductDetails/ProductDetails';
import Cart from './pages/Cart/Cart';
import SearchPage from './pages/SearchPage/SearchPage';
import MyOrders from './pages/MyOrders';

const App = () => {
  const {showUserLogin} = useAppContext()

  return (
    <>
      <Navbar/>
      {showUserLogin ? <Login/> : null}
      <Toaster/>
      <div className='px-6 md:px-16 lg:px-24 xl:px-32'>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/products' element={<AllProducts/>}/>
          <Route path='/products/:category' element={<ProductCategory/>}/>
          <Route path='/products/:category/:id' element={<ProductDetails/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/search' element={<SearchPage/>}/>
          <Route path='/my-orders' element={<MyOrders/>}/>
          
        </Routes>
      </div>
      <Footer/>
    </>
  )
}

export default App
