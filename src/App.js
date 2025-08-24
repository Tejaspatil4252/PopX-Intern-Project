import React,{useState} from 'react';
import './App.css';
import Registration from './pages/Registration';
import Login from './pages/Login';
import LandingPage from './pages/LandingPage';
import { Routes,Route } from 'react-router-dom';
import SettingPage from './pages/SettingPage';

function App() {
  const [data, setData]=useState({
      fullName:"",
      phone:"",
      email:"",
      password:"",
      company:"",
      agency:""
    })

    function addData(d){
      
      setData((pre)=>{
        return{
          ...pre,
          ...d
        }
      })
    }

  return (
    <Routes>
      <Route path='/' element={<LandingPage/>}/>
      <Route path='/login' element={<Login
       email={data.email}
      password={data.password}/>} 
     
      />
      <Route path='/register' element={<Registration
      add={addData}
      />}/>
      <Route path='/home' element={<SettingPage
      name={data.fullName}
      email={data.email}
      />}/>

      

    </Routes>

  );
}

export default App;
