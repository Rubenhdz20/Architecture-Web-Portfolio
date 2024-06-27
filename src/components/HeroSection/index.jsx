import React from 'react';
import { useState } from 'react';
import MobileMenu from '../MobileMenu';
import './HeroSection.css';

function HeroSection() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    function smoothScrolling (e) {
        e.preventDefault(); 
        const target = document.getElementById('contact-section');
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    }

    return(
        <>
            {isMobileMenuOpen && (
                    <>
                        <MobileMenu onClose={toggleMobileMenu} className={isMobileMenuOpen ? 'mobile-container active' : 'mobile-container'} />
                    </>
            )}
            <nav className="hero__nav">
                <svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg"  className='hero__menu' onClick={toggleMobileMenu}>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M18 7C18 7.41421 17.6642 7.75 17.25 7.75H0.75C0.335786 7.75 0 7.41421 0 7C0 6.58579 0.335786 6.25 0.75 6.25H17.25C17.6642 6.25 18 6.58579 18 7ZM0.75 1.75H17.25C17.6642 1.75 18 1.41421 18 1C18 0.585786 17.6642 0.25 17.25 0.25H0.75C0.335786 0.25 0 0.585786 0 1C0 1.41421 0.335786 1.75 0.75 1.75ZM17.25 12.25H0.75C0.335786 12.25 0 12.5858 0 13C0 13.4142 0.335786 13.75 0.75 13.75H17.25C17.6642 13.75 18 13.4142 18 13C18 12.5858 17.6642 12.25 17.25 12.25Z" fill="#121714"/>
                </svg>
                <h2 className="hero__nav--second-title">Arquitecta Mariana</h2>
            </nav>
            <section className="hero__section">
                <img className="hero__section--background" src='/assets/background 3.jpeg' alt="" />
                <h1 className="hero__section--first-title">Construyendo el futuro de tu proyecto</h1>
                <a href="#contact-section" className="hero__section--link" onClick={smoothScrolling}>
                    Empecemos
                </a>
            </section>
        </>
    )
};

export default HeroSection;