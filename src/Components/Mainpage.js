import React from 'react';

import Home from '../Components/Home';
import About from '../Components/About';
import Contact from '../Components/Contact';
import Nav from '../Components/Nav';

export default function Mainpage() {
    return (
        <>
            <Nav />
            <Home />
            <About />
            <Contact />
        </>
    )
}
