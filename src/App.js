import React from 'react';
import Signup from './Componet/Signup';
import LoginPage from './Componet/LoginPage';
import {Routes , Route  } from 'react-router-dom';

function App() {
  
  return (
    
      <Routes>
        <Route path='/' element={<LoginPage/>} />
        <Route path='/signup' element={<Signup/>} />
      </Routes>
    
  );
}

export default App;
