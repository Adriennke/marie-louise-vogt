import React from 'react';


import LazyLoad from 'react-lazyload';

import DocumentTitle from 'react-document-title';


import img1 from '../img/marielouisevogt_01.jpg';
import img2 from '../img/marielouisevogt_02.jpg';
import img3 from '../img/marielouisevogt_03.jpg';
import img4 from '../img/marielouisevogt_04.jpg';
import img5a from '../img/marielouisevogt_05_A.jpg';
import img5b from '../img/marielouisevogt_05_B.jpg';
import img6 from '../img/marielouisevogt_06.jpg';
import img7 from '../img/marielouisevogt_07.jpg';
import img8 from '../img/marielouisevogt_08.jpg';
import img9 from '../img/marielouisevogt_09.jpg';
import img10a from '../img/marielouisevogt_10_A.jpg'
import img10b from '../img/marielouisevogt_10_B.jpg';
import img11 from '../img/marielouisevogt_11.jpg';
import img12 from '../img/marielouisevogt_12.jpg';
import img13 from '../img/marielouisevogt_13.jpg';
import img14 from '../img/marielouisevogt_14.jpg';
import img15 from '../img/marielouisevogt_15.jpg';
import img16 from '../img/marielouisevogt_16.jpg';
import img17 from '../img/marielouisevogt_17.jpg';
import img18 from '../img/marielouisevogt_18.jpg';
import img19 from '../img/marielouisevogt_19.jpg';
import img20 from '../img/marielouisevogt_20.jpg';
import img21a from '../img/marielouisevogt_21_A.jpg';
import img21b from '../img/marielouisevogt_21_B.jpg';
import img22 from '../img/marielouisevogt_22.jpg';
import img23a from '../img/marielouisevogt_23_A.jpg';
import img23b from '../img/marielouisevogt_23_B.jpg';
import img24 from '../img/marielouisevogt_24.jpg';
import img25a from '../img/marielouisevogt_25_A.jpg';
import img25b from '../img/marielouisevogt_25_B.jpg';
import img26 from '../img/marielouisevogt_26.jpg';
import img27 from '../img/marielouisevogt_27.jpg';
import img28a from '../img/marielouisevogt_28_A.jpg';
import img28b from '../img/marielouisevogt_28_B.jpg'
import img29 from '../img/marielouisevogt_29.jpg'
import img30 from '../img/marielouisevogt_30.jpg';
import img31 from '../img/marielouisevogt_31.jpg';
import img32 from '../img/marielouisevogt_32.jpg';
import img33a from '../img/marielouisevogt_33_A.jpg';
import img33b from '../img/marielouisevogt_33_B.jpg';
import img34 from '../img/marielouisevogt_34.jpg';
import img35 from '../img/marielouisevogt_35.jpg';
import img36 from '../img/marielouisevogt_36.jpg';
import img37 from '../img/marielouisevogt_37.jpg';
import img38 from '../img/marielouisevogt_38.jpg';
import img39 from '../img/marielouisevogt_39.jpg';


import logo from '../img/logo-weiss.png'




export default function Home() {

    return (
        <DocumentTitle title="Marie-Louise Vogt">

            <>
                <div className="img-container">

                    <img src={img1} alt="Seated woman wearing a long, light pink net crochet dress made from extra soft and chenille-like yarn with a velvet gloss." id="work" />

                    <LazyLoad height={200}>
                        <img src={img2} alt="Seated woman wearing a silver net crochet dress made from ribbon lurex yarn with an asymmetrical shoulder detail." />
                        <img src={img3} alt="Lying woman wearing a long, red felted crochet net dress with sleeves made from virgin wool." />
                        <img src={img4} alt="Armchair draped with purple fabric." />
                        <div id="slideshow">
                            <img className="bottom" src={img5a} alt="Standing woman wearing a white, red and blue crochet dress made from extra soft and chenille-like yarn with a velvet gloss and wool." />
                            <img className="top" src={img5b} alt="Back view of standing woman wearing a white, red and blue crochet dress made from extra soft and chenille-like yarn with a velvet gloss and wool." />
                        </div>
                        {/*this image is being doubled to be the placeholder for the animation, let is stay! */}
                        <img src={img5a} alt="Back view of standing woman wearing a white, red and blue crochet dress made from extra soft and chenille-like yarn with a velvet gloss and wool." />
                        <img src={img6} alt="Detail of a woman’s legs in white high heels and white tights, wearing a silver net crochet dress made from ribbon lurex yarn." />
                        <img src={img7} alt="Standing woman wearing an asymmetrical silver crochet top made from viscose and metal polyester yarn." />
                        <img src={img8} alt="Standing woman wearing an asymmetrical silver crochet top made from viscose and metal polyester yarn." />
                        <img src={img9} alt="Back view of standing woman wearing a light blue and white crochet top made from viscose raffia." />
                        <div id="slideshow">
                            <img className="bottom" src={img10a} alt="Detail of a sky-blue skirt with a silver crochet bag attached to the front and pink high heels." />
                            <img className="top" src={img10b} alt="Still life with a baguette in a pink high heel on a chair." />
                        </div>
                        {/*this image is being doubled to be the placeholder for the animation, let is stay! */}
                        <img src={img10a} alt="Still life with a silver crochet top made from viscose and metal polyester yarn, neon light and two crystals." />
                        <img src={img11} alt="Woman pulling off a black and light blue vertical striped crochet turtleneck made from virgin wool." />
                        <img src={img12} alt="Black and white detail of a knitted dress." />
                        <img src={img13} alt="Standing woman wearing a crochet body piece made from white, blue and pink strips of viscose, silk, cotton and jersey fabrics." />
                        <img src={img14} alt="Standing woman wearing a crochet body piece made from brownish strips of viscose, silk, cotton and jersey fabrics." />
                        <img src={img15} alt="Detail of a white and purple knitted woolen dress ." />
                        <img src={img16} alt="Standing woman wearing a crochet and knit dress made from strips of viscose, silk, cotton and jersey fabrics, leather and wool." />
                        <img src={img17} alt="Detail of a knitted dress." />
                        <img src={img18} alt="Lying woman wearing a white, red and blue crochet net dress made from extra soft and chenille-like yarn with a velvet gloss and wool." />
                        <img src={img19} alt="Detail of a woman’s legs in white high heels and white tights." />
                        <img src={img20} alt="Woman posing with a long, white net crochet dress made from extra soft yarn with a silky gloss." />
                        <div id="slideshow">
                            <img className="bottom" src={img21a} alt="Detail of a woman wearing a long, light pink net crochet dress made from extra soft and chenille-like yarn with a velvet gloss." />
                            <img className="top" src={img21b} alt="Detail of a woman wearing a long, light pink net crochet dress made from extra soft and chenille-like yarn with a velvet gloss." />
                        </div>
                        {/* this image is being doubled to be the placeholder for the animation, let is stay!*/}
                        <img src={img21b} alt="A woman posing in front of a recycling hill in berlin, germany." />
                        <img src={img22} alt="Standing woman wearing a black crochet dress made from extra soft and chenille-like yarn with a velvet gloss and wool." />
                        <div id="slideshow">
                            <img className="bottom" src={img23a} alt="Editorial from Harper’s Bazaar Ukraine, seated woman wearing an asymmetrical silver lurex crochet top ." />
                            <img className="top" src={img23b} alt="Editorial from Harper’s Bazaar Ukraine, detail of a woman wearing an asymmetrical silver lurex crochet top." />
                        </div>
                        {/*this image is being doubled to be the placeholder for the animation, let is stay!*/}
                        <img src={img23b} alt="A woman posing in front of a recycling hill in berlin, germany." />
                        <img src={img24} alt="Standing woman wearing a black and red vertical striped crochet turtleneck made from wool and viscose raffia." />
                        <div id="slideshow">
                            <img className="bottom" src={img25a} alt="Sitting woman wearing a white, light pink and black crochet top made from raffia, cotton, wool and lurex yarn." />
                            <img className="top" src={img25b} alt="Lying woman wearing a white, light pink and black crochet top made from raffia, cotton, wool and lurex yarn." />
                        </div>
                        {/*this image is being doubled to be the placeholder for the animation, let is stay!*/}
                        <img src={img25b} alt="Lying woman wearing a white, light pink and black crochet top made from raffia, cotton, wool and lurex yarn." />
                        <img src={img26} alt="Standing woman wearing a white, pink and light blue crochet skirt made from raffia and wool." />
                        <img src={img27} alt="Detail of a woman’s legs with silver overknee socks and silver high heels." />
                        <div id="slideshow">
                            <img className="bottom" src={img28a} alt="Back view of a woman wearing an asymmetrical silver crochet top made from viscose and metal polyester yarn." />
                            <img className="top" src={img28b} alt="Side view of a woman wearing an asymmetrical silver crochet top made from viscose and metal polyester yarn." />
                        </div>
                        <img src={img28b} alt="Side view of a woman wearing an asymmetrical silver crochet top made from viscose and metal polyester yarn." />
                        <img src={img29} alt="Side view of a woman lying on a chair wearing a silver, white and red raffia and wool crochet top and white neoprene skirt with bottom crochet detail." />
                        <img src={img30} alt="Woman hiding behind leaves of a tree wearing a body piece made from brown wooden pearls." />
                        <img src={img31} alt="Black and white photo of a body piece woven from raffia, hanging on a tree." />
                        <img src={img32} alt="Kneeling woman wearing a colourful woven raffia top " />
                        <div id="slideshow">
                            <img className="bottom" src={img33a} alt="Close up of a woman with colourful face painting and a flower in her hair." />
                            <img className="top" src={img33b} alt="Woman standing wearing a pink, black, grey, blue and white knitted horizontal striped dress made from wool." />
                        </div>
                        {/*this image is being doubled to be the placeholder for the animation, let is stay!*/}
                        <img src={img33a} alt="A woman posing in front of a recycling hill in berlin, germany." />
                        <img src={img34} alt="Woman sitting in a boat wearing a crochet body piece made from strips of colourful silk, viscose, jersey and cotton fabrics." />
                        <img src={img35} alt="Standing woman wearing a multicoloured crochet top made from raffia, cotton, wool and lurex yarn." />
                        <img src={img36} alt="Standing woman wearing a black and red vertical striped crochet turtleneck made from wool and viscose raffia." />
                        <img src={img37} alt="A woman wearing a silver crochet pullover made from viscose and metal polyester yarn." />
                        <img src={img38} alt="Standing woman wearing a black and light blue vertical striped crochet turtleneck made from wool." />
                        <img src={img39} alt="Standing woman wearing a multicoloured crochet top made from raffia, cotton, wool and lurex yarn." />
                    </LazyLoad>
                </div>

                <a href="#work"><img src={logo} alt="The initials of Marie-Louise Vogt, MLV." className="logo" /></a>
            </>

        </DocumentTitle >
    )
}
