import React from 'react';


import { Link } from "react-router-dom";


import DocumentTitle from 'react-document-title';

export default function Contact() {
    return (

        <DocumentTitle title="Marie-Louise Vogt | home">


            <div className="contact">

                <h2 id="contact" tabIndex="0">MARIE LOUISE VOGT</h2>

                <p tabIndex="0" aria-label="reuterstrasse 37 12047 Berlin Germany"       >
                    REUTERSTRASSE 37<br />
                    12047 BERLIN<br />
                    GERMANY
                </p>

                <span className="email"><a href="mailto:contact@marielouisevogt.com"> CONTACT@MARIELOUISEVOGT.COM</a></span>


                <span className="instaButton"><a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/marielouisevogt/">INSTAGRAM</a></span>


                <Link to="/credits" className="creditButton">CREDITS</Link>

                <p tabIndex="0" >
                    &copy;2020 MARIE-LOUISE VOGT
                    <br />ALL RIGHTS RESERVED
                </p>

            </div>

        </DocumentTitle >

    )
}
