import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import "../src/view/assets/css/Navbar.css"
import reportWebVitals from './reportWebVitals';
import "../src/view/assets/css/tailwind.css"
import { ChakraProvider } from '@chakra-ui/react'
// import { GlobalWorkerOptions } from 'pdfjs-dist';
// import pdfWorker from 'pdfjs-dist/build/pdf.worker.entry';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ChakraProvider>
    <App />
  </ChakraProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
// GlobalWorkerOptions.workerSrc = pdfWorker;
