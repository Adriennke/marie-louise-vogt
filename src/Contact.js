import React from 'react';


import {
    BrowserRouter as Router,
    Link,
} from "react-router-dom";


import DocumentTitle from 'react-document-title';

export default function Contact() {
    return (

        <DocumentTitle title="Marie-Louise Vogt | contact">


            <div className="contact">
                <p id="contact">
                    <strong>MARIE LOUISE VOGT</strong>
                    <br />
                    <br />

                        REUTERSTRASSE 37<br />
                        12047 BERLIN<br />
                        GERMANY
                        <br />
                    <br />
                    <span className="email"><a href="mailto:contact@marielouisevogt.com"> CONTACT@MARIELOUISEVOGT.COM</a></span>

                    <br />
                    <br />
                    <span className="instaButton"><a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/marielouisevogt/">INSTAGRAM</a></span>
                    <br />
                    <br />

                    <Link to="/credits" className="creditButton">CREDITS</Link>


                    <br />
                    <br />
                        &copy;2020 MARIE-LOUISE VOGT
                        <br />ALL RIGHTS RESERVED
                    </p>
            </div>

        </DocumentTitle >

    )
}
