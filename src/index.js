import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ContextCombiner from "./contextCombiner"

ReactDOM.render(
  <React.StrictMode>
    <ContextCombiner>
      <App />
    </ContextCombiner>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
