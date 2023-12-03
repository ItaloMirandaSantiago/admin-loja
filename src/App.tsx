import React from 'react';
import logo from './logo.svg';
import { Route, Routes } from 'react-router-dom';
import Login from './Routes/Login';
import Home from './Routes/Home';

function App() {
  
  return (
    <div className="App">
      <Routes>
          <Route path='/' element={<Login />} />
        <Route path='/home' element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
