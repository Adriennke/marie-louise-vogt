import React from 'react';

import { Link } from "react-router-dom";

import DocumentTitle from 'react-document-title';

import logo from '../img/logo-weiss.png'

export default function Credits() {
    return (
        <DocumentTitle title="Marie-Louise Vogt | credits">

            <div className="credits">
                <ul>
                    <li>01 – 13</li>
                    <li>20 – 25</li>
                    <li>28 – 35</li>
                    <li>Photography Claudia Grassl</li>
                    <li>Styling Katharina Gruszczynski</li>
                </ul>

                <ul>
                    <li>14 – 19</li>
                    <li>Photography Laurens Grigoleit</li>
                </ul>

                <ul>
                    <li>26 – 27</li>
                    <li>Harpers Bazaar Ukraine</li>
                    <li>Photography Paulie Eberwein</li>
                    <li>Styling Camille Naomi Franke</li>
                </ul>

                <ul>
                    <li>36 – 41</li>
                    <li>Photography Martin Thacker</li>
                </ul>
                <ul>
                    <li>42 – 46</li>
                    <li>Photography Jessica Wolfelsperger</li>
                </ul>

                <ul>
                    <li>Website developed by</li>
                    <li><span className="linkToMyWebsite"><a target="_blank" rel="noopener noreferrer" href="https://ennketoll.com/">Adrienn Tollas</a></span></li>
                </ul>

                <Link to="/" id="backButton">back</Link>

                <Link to="/"><img src={logo} alt="The initials of Marie-Louise Vogt, MLV." className="logo" /></Link>

            </div>
        </DocumentTitle>
    )
}
