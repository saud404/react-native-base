import React from 'react';
import ReactDOM from 'react-dom/client';
import { NativeBaseProvider } from 'native-base';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NativeBaseProvider isSSR>
    </NativeBaseProvider>
  </React.StrictMode>

);

