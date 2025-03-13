// src/App.js
import React from 'react';
import GlobalStyle from './styles/GlobalStyle';
import AppRouter from './router/AppRouter';

export default function App() {
  return (
    <>
      <GlobalStyle />
      <AppRouter />
    </>
  );
}
