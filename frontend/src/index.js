// require('file-loader?name=[name].[ext]!./index.html');
import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { App } from './App';
import './index.css';

// const appElement = document.getElementById('app');

// ReactDOM.render(<App />, appElement);
const container = document.getElementById('app');
const root = createRoot(container);
root.render(
  <BrowserRouter>
    <App />
    <Toaster />
  </BrowserRouter>
);
