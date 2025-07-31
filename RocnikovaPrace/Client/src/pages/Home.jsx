import React from 'react'
import MainBanner from '../components/MainBanner/MainBanner'
import Categories from '../components/Categories/Categories'
import EditorsPick from '../components/EditorsPick/EditorsPick'
import NewsLetter from '../components/NewsLetter/NewsLetter'

const Home = () => {
  return (
    <div className='mt-10'>
      <MainBanner/>
      <Categories/>
      <EditorsPick/>
      <NewsLetter/>
    </div>
  )
}

export default Home
