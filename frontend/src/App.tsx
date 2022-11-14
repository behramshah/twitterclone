import React from 'react';
import SignIn from './pages/SignIn';
import { Home } from './pages/Home';
import { Routes, Route } from 'react-router-dom';
import { CssBaseline } from '@mui/material';

function App() {
  return (
    <div className="App">
      <CssBaseline/>
      <Routes>
        <Route path="/signin" element ={<SignIn/>} />
        <Route path="/" element ={<Home/>} />
      </Routes>
    </div>
  );
}

export default App;
