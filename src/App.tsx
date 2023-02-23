import axios from 'axios';
import React, { Suspense } from 'react';
import { Routes, Route, HashRouter } from 'react-router-dom';
import { Layout } from './Lauout/Layout';
import { GlobalRouting } from './routing/GlobalRouting';
import './utils/i18n';

function App() {
  return (
    <>
      <HashRouter>
        <Suspense fallback={'Loading...'}>
          <GlobalRouting />
        </Suspense>
      </HashRouter>
    </>
  );
}

export default App;
