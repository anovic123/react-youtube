import { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { GlobalRouting } from './routing/GlobalRouting';
import { Loader } from './components/Loader/Loader';
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
