import React from 'react';

import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";


import './App.scss';


import Credits from './Credits';

import Mainpage from './Mainpage';



function App() {
  return (
    <>
      <Router>
        <div className="container">

          <Route exact path="/" component={Mainpage} />
          <Route path="/credits" component={Credits} />

        </div>
      </Router>
    </>
  );
}

export default App;
