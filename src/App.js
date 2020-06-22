import React, { lazy, Suspense } from 'react';
import { Provider } from './context/GeneratorContext';

function App() {
  const ResultCode = lazy(() => import('./components/ResultCode/ResultCode'))
  const MainTabs = lazy(() => import('./components/MainTabs/MainTabs'))
  return (
    <div className="og">
      <Provider>
        <Suspense fallback={null}>
          <MainTabs />
          <ResultCode />
        </Suspense>
      </Provider>
    </div>
  );
}

export default App;
