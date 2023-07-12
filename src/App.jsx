import React from 'react';
import { BrowserRouter , Router, Route, Routes } from 'react-router-dom';

import Login from './pages/Login'
import Home from './pages/Home';
import ManageRequests from './pages/ManageRequests';
import ManageEquipment from './pages/ManageEquipment';

import './App.css';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/managerequests' element={<ManageRequests/>}/>
          <Route path='/manageequipment' element={<ManageEquipment/>}/>
          <Route path='/login' element={<Login/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
