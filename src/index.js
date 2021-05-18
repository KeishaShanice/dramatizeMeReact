import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { BrowserRouter as Router } from 'react-router-dom';


ReactDOM.render(
  <React.StrictMode>
    <Router>
      {/* <h1>Hello</h1> */}
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);



