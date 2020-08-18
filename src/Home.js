import React, { useState } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll'
import DocumentTitle from 'react-document-title';

import red_hair from './img/red.jpeg';
import bazaar from './img/Look12.jpeg'
import bild1 from './img/bild1.png';
import bild2 from './img/bild2.png';
import bild3 from './img/bild3.png';
import bild4 from './img/bild4.png';
import bild5 from './img/bild5.png';
import red_dress from './img/red_dress.png';
import video from './img/video-final.mp4';
import gif from './img/video-final.gif'

import logo from './img/logo-weiss.png'

export default function Home() {
    const [isChecked, setIsChecked] = useState(false);
    return (
        <DocumentTitle title="Marie-Louise Vogt">
            <div className="home">

                <nav role="navigation" className="dropdown-menu">

                    <input type="checkbox" id="checkbox" className="dropdown-menu__checkbox" checked={isChecked} onChange={() => setIsChecked(!isChecked)} />
                    <label htmlFor="checkbox" className="dropdown-menu__menu">MENU</label>

                    <div className="dropdown-menu__container">
                        <div className="centered-list">
                            <AnchorLink className="dropdown-menu__list" href="#work" onClick={() => setIsChecked(!isChecked)}>work</AnchorLink>
                            <AnchorLink className="dropdown-menu__list" href="#contact" onClick={() => setIsChecked(!isChecked)}>contact</AnchorLink>
                            <AnchorLink className="dropdown-menu__list" href="#about" onClick={() => setIsChecked(!isChecked)}>about</AnchorLink>
                        </div>


                    </div>
                </nav>

                <div className="img-container" id="work">
                    <img src={bild1} alt="A woman posing in front of a recycling hill in berlin, germany." />
                    <img src={red_hair} alt="A woman posing in front of a recycling hill in berlin, germany." />
                    <img src={red_dress} alt="A woman posing in front of a recycling hill in berlin, germany." />
                    <img src={bild2} alt="A woman posing in front of a recycling hill in berlin, germany." />
                    <img src={bild3} alt="A woman posing in front of a recycling hill in berlin, germany." />
                    <img src={bild5} alt="A woman posing in front of a recycling hill in berlin, germany." />
                    <img src={bazaar} alt="A woman posing in front of a recycling hill in berlin, germany." />
                    <img src={bild4} alt="A woman posing in front of a recycling hill in berlin, germany." />
                </div>
                <span className="hero" >
                    <img src={gif} alt="Short gif of a photo-session, where some work of Marie-Louise Vogt can be seen." />
                </span>

                <a href="#work"><img src={logo} alt="" className="logo" /></a>


            </div>
        </DocumentTitle>
    )
}
