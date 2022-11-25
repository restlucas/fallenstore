import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/Header/Header';
import Home from './components/Home/Home';
import SwiperCarousel from './components/SwiperCarousel/SwiperCarousel';
import Footer from './components/Footer/Footer';

import './App.css'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <SwiperCarousel />
        <Routes>
          <Route path="/" element={<Home/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
