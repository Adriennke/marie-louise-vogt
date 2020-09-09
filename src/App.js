import React from 'react';

import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";

import ScrollMemory from 'react-router-scroll-memory';


import './App.scss';


import Credits from './Credits';

import Mainpage from './Mainpage';



function App() {
  return (
    <>
      <Router>
        <ScrollMemory />
        <Route exact path="/" component={Mainpage} />
        <Route exact path="/credits" component={Credits} />
      </Router>
    </>
  );
}

export default App;
