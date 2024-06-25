import React from 'react';
import { animateScroll as scroll } from 'react-scroll';
import './HeroSection.css'

function HeroSection() {
    const handleClick = () => {
        scroll.scrollTo('#contact-section');
    };

    console.log(handleClick);

    return(
        <>
            <nav className="hero__nav">
                <h2 className="hero__nav--second-title">Arquitecta Mariana</h2>
            </nav>
            <section className="hero__section">
                <img className="hero__section--background" src='/assets/background 3.jpeg' alt="" />
                <h1 className="hero__section--first-title">Construyendo el futuro de tu proyecto</h1>
                <button className="hero__section--button" onClick={handleClick}>Empecemos</button>
            </section>
        </>
    )
};

export default HeroSection;