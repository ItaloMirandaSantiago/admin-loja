import React, { useContext } from 'react';
import logo from './logo.svg';
import { Route, Routes } from 'react-router-dom';
import Login from './Routes/Login';
import Home from './Routes/Home';
import CreateProduct from './components/CreateProduct';
import Promotion from './Routes/Promotion';
import Menu from './components/Menu';
import { EditContext } from './context/EditContext';
import EditProduct from './components/EditProduct';
import CreatePromotion from './Routes/CreatePromotion';

function App() {
  const Edit = useContext(EditContext)
  return (
    <div className="App ">
      <Menu />
      <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/home' element={<Home />} />
          <Route path='/create' element={<CreateProduct />} />
          <Route path='/promotion' element={<Promotion />} />
          <Route path='/createpromotion/:arrayproductstring' element={<CreatePromotion />} />
      </Routes>
      {Edit?.EditResApi && 
       <EditProduct />
      }
    </div>
  );
}

export default App;
