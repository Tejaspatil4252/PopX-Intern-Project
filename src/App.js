import React from 'react';
import './App.css';
import Registration from './components/Registration';
import Login from './components/Login';
import LandingPage from './components/LandingPage';
import { Routes,Route } from 'react-router-dom';
import SettingPage from './components/SettingPage';

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
