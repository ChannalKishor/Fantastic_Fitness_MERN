// import React from 'react';
// // import ReactDOM from 'react-dom';
// import { createRoot } from 'react-dom';
// import App from './App';

// import "./styles/index.scss";

// createRoot.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
// import './styles/index.scss';
import '../src/index.css'

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  // <React.StrictMode>
    <App />
  // </React.StrictMode>
);
