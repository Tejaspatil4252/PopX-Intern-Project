import React from 'react';
import './App.css';
import Registration from './pages/Registration';
import Login from './pages/Login';
import LandingPage from './pages/LandingPage';
import { Routes,Route } from 'react-router-dom';
import SettingPage from './pages/SettingPage';

function App() {
  return (
    <Routes>
      <Route path='/' element={<LandingPage/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Registration/>}/>
      <Route path='/home' element={<SettingPage/>}/>

      

    </Routes>

  );
}

export default App;
