import { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';

import { Loader } from './components/loader';

import { GlobalRouting } from './utils/routes/GlobalRouting';

import './utils/i18n';

function App() {
  return (
    <>
      <BrowserRouter>
        <Suspense fallback={<Loader />}>
          <GlobalRouting />
        </Suspense>
      </BrowserRouter>
    </>
  );
} 

export default App;
