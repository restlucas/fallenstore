import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/Header/Header';
import Home from './components/Home/Home';
import SendToTopButton from './components/SendToTopButton/SendToTopButton';
import Footer from './components/Footer/Footer';

import './App.css'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home/>} />
        </Routes>
        <SendToTopButton />
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
