import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';

import Header from './components/Header'

import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Header />
      </div>
    </Router>
  );
}

export default App;
