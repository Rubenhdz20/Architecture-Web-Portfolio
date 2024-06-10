import React from "react";
import './HeroSection.css'

function HeroSection() {
    return(
        <>
            <nav className="HeroNav">
                <h1 className="HeroTitle">Mariana Arquitectos</h1>
            </nav>
            <section className="HeroSection">
                <img className="HeroBackground" src='src/assets/Fuentes del Molino/IMG_8741.jpeg' alt="" />
            </section>
        </>
    )
};

export default HeroSection;