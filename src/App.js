import React from 'react';
import { ToastContainer } from 'react-toastify';

import GlobalStyle from './global';

import Routes from './routes';

export default function App() {
  return (
    <>
      <Routes />
      <GlobalStyle />
      <ToastContainer autoClose={2000} />
    </>
  );
}
