import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from '../Lauout/Layout';
import { HomePage } from '../pages/Home/HomePage';
import { SearchFeed } from '../pages/SearchFeed/SearchFeed';
import { VideoPage } from '../pages/Video/VideoPage';

export const GlobalRouting = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="" element={<HomePage />} />
        <Route path="/watch/:id" element={<VideoPage />} />
        <Route path="/search/:searchTerm" element={<SearchFeed />} />
      </Route>
    </Routes>
  );
};
