import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';

import Home from './pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';

import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Route path="/" render={props => (
          <React.Fragment>
            <Home />
          </React.Fragment>
        )} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
