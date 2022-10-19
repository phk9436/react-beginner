import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Routes/Home';
import Detail from './Routes/Detail';

function App () {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path='/Detail' element={<Detail/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
