import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from '../Lauout/Layout';
import { HomePage } from '../pages/Home/HomePage';

export const GlobalRouting = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>
  )
}