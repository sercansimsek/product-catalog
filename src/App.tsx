import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home } from './components/Home';
import { Phones } from './components/Phones';
import { Tablets } from './components/Tablets';
import { Accessories } from './components/Accessories';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/phones' element={<Phones />} />
        <Route path='/tablets' element={<Tablets />} />
        <Route path='/accessories' element={<Accessories />} />
      </Routes>
    </>
  );
}


