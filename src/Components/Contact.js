import React from 'react';


import { Link } from "react-router-dom";


import DocumentTitle from 'react-document-title';

export default function Contact() {
    return (

        <DocumentTitle title="Marie-Louise Vogt | home">


            <div className="contact">

                <h2 id="contact">MARIE LOUISE VOGT</h2>

                <p aria-label="address">
                    REUTERSTRASSE 37<br />
                    12047 BERLIN<br />
                    GERMANY
                </p>

                <span className="email"><a href="mailto:contact@marielouisevogt.com"> CONTACT@MARIELOUISEVOGT.COM</a></span>


                <span className="instaButton"><a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/marielouisevogt/">INSTAGRAM</a></span>


                <Link to="/credits" className="creditButton">CREDITS</Link>

                <p>
                    &copy;2020 MARIE-LOUISE VOGT
                    <br />ALL RIGHTS RESERVED
                </p>

            </div>

        </DocumentTitle >

    )
}
