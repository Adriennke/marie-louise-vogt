import React from 'react';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


import './App.scss';

import Home from './Home';
import About from './About';
import Contact from './Contact';

function App() {
  return (
    <>
      <div className="container">
        <Home />
        <About />
        <Contact />
      </div>
    </>
  );
}

export default App;
