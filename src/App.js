import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';

import Home from './pages/Home';
import TopStories from './pages/TopStories';
import AskStories from './pages/AskStories';
import ShowStories from './pages/ShowStories';
import JobStories from './pages/JobStories';
import Comments from './pages/Comments';
import Header from './components/Header';
import Footer from './components/Footer';

import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Route exact path="/" render={props => (
          <React.Fragment>
            <Home />
          </React.Fragment>
        )} />
        <Route exact path="/topstories" render={props => (
          <React.Fragment>
            <TopStories />
          </React.Fragment>
        )} />
        <Route exact path="/askstories" render={props => (
          <React.Fragment>
            <AskStories />
          </React.Fragment>
        )} />
        <Route exact path="/showstories" render={props => (
          <React.Fragment>
            <ShowStories />
          </React.Fragment>
        )} />
        <Route exact path="/jobstories" render={props => (
          <React.Fragment>
            <JobStories />
          </React.Fragment>
        )} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
