import React from 'react';

import red_hair from './img/red.jpeg';
import logo from './img/logo-final.png'

import './App.css';

function App() {
  return (
    <>

      <img src={logo} alt="" className="logo" />

      <main>

        <img src={red_hair} alt="A woman posing in front of a recycling hill in berlin, germany." />
        <h1>MARIE LOUISE VOGT</h1>
      </main>

    </>
  );
}

export default App;
