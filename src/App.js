import React from 'react';
import './App.scss';
import MainTabs from './components/MainTabs/MainTabs';
import { Provider } from './context/GeneratorContext';
import ResultCode from './components/ResultCode/ResultCode';

function App() {


  return (
    <div className="App">
      <Provider>
        <MainTabs />
        <ResultCode />
      </Provider>
    </div>
  );
}

export default App;
