import React from 'react';

import { SkipNavLink, SkipNavContent } from "@reach/skip-nav";
import "@reach/skip-nav/styles.css";

import Home from '../Components/Home';
import About from '../Components/About';
import Contact from '../Components/Contact';
import Nav from '../Components/Nav';

export default function Mainpage() {
    return (
        <>
            <SkipNavLink className="skip">Skip to about section</SkipNavLink>
            <Nav />
            <Home />
            <SkipNavContent>
                <About />
            </SkipNavContent>
            <Contact />
        </>
    )
}
