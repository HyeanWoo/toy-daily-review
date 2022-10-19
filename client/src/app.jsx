import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<MainPage />}></Route>
      <Route path="/signin" element={<SignInPage />}></Route>
      <Route path="/signup" element={<SignUpPage />}></Route>
    </Routes>
  </BrowserRouter>
);

export default App;