import React, { useState } from 'react';


import AnchorLink from 'react-anchor-link-smooth-scroll';


export default function Nav() {

    const [isChecked, setIsChecked] = useState(false);

    return (
        <>
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

        </>
    )
}
