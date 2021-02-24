import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Header from './components/Header'
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
