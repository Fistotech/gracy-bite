import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import HomePage from './components/pages/HomePage';
import SignUpPage from './components/pages/SignUpPage';
import LoginPage from './components/pages/LoginPage';
import OrderNowPage from './components/pages/OrderNowPage';
import PiePage from './components/pages/PiePage';

function App() {
  return (
    
    <BrowserRouter>
      <Routes>
      <Route exact path="/" element={<HomePage />}/>
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/signin" element={<LoginPage />} />
        <Route path="/order-now" element={<OrderNowPage />} />
        <Route path="/order-pie" element={<PiePage />} />
      </Routes>
    </BrowserRouter>
     
  )
}

export default App;
