import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import { WhatToDo } from './components/WhatToDo';
import 'bootstrap/dist/css/bootstrap.min.css';



ReactDOM.render(
  <React.StrictMode>
    <Router>
      <WhatToDo />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);


