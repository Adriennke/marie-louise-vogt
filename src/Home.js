import React from 'react';


import DocumentTitle from 'react-document-title';


import red_hair from './img/red.jpeg';
import bazaar from './img/Look12.jpeg'
import bild1 from './img/bild1.png';
import bild2 from './img/bild2.png';
import bild3 from './img/bild3.png';
import bild4 from './img/bild4.png';
import bild5 from './img/bild5.png';
import red_dress from './img/red_dress.png';

import gif from './img/final_gif2.gif'

import logo from './img/logo-weiss.png'




export default function Home() {

    return (
        <DocumentTitle title="Marie-Louise Vogt">

            <div className="home">

                <div className="img-container" id="work">
                    <img src={bild1} alt="A woman posing in front of a recycling hill in berlin, germany." />
                    <img src={bild5} alt="A woman posing in front of a recycling hill in berlin, germany." />
                    <img src={bild3} alt="A woman posing in front of a recycling hill in berlin, germany." />
                    <img src={red_hair} alt="A woman posing in front of a recycling hill in berlin, germany." />

                    <div id="slideshow">
                        <img className="bottom" src={red_dress} />
                        <img className="top" src={bild2} />
                    </div>
                    {/*this image is being doubled to be the placeholder for the animation, let is stay! */}
                    <img src={bazaar} alt="A woman posing in front of a recycling hill in berlin, germany." />
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
