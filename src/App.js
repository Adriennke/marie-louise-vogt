import React from 'react';


import './App.scss';

import Home from './Home';
import About from './About';
import Contact from './Contact';

function App() {
  return (
    <>
      <div className="container">
        <Home />
      </div>
      <About />
      <Contact />
    </>
  );
}

export default App;
