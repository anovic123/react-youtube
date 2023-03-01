import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from '../Lauout/Layout';
import { ErrorPage } from '../pages/Error/ErrorPage';
import { HomePage } from '../pages/Home/HomePage';
import { SearchFeed } from '../pages/SearchFeed/SearchFeed';
import { VideoPage } from '../pages/Video/VideoPage';

const PATH = {
  LAYOUT: '/',
  HOME_PAGE: '',
  VIDEO_PAGE: '/watch/:id',
  SEARCH_FEED: '/search/:searchTerm',
  ERROR_PAGE: '*',
};

export const GlobalRouting = () => {
  return (
    <Routes>
      <Route path={PATH.LAYOUT} element={<Layout />}>
        <Route path={PATH.HOME_PAGE} element={<HomePage />} />
        <Route path={PATH.VIDEO_PAGE} element={<VideoPage />} />
        <Route path={PATH.SEARCH_FEED} element={<SearchFeed />} />
        <Route path={PATH.ERROR_PAGE} element={<ErrorPage />} />
      </Route>
    </Routes>
  );
};
