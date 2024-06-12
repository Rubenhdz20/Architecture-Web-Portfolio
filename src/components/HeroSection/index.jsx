import './HeroSection.css'

function HeroSection() {
    return(
        <>
            <nav className="hero__nav">
                <h2 className="hero__nav--second-title">Mariana Arquitectos</h2>
            </nav>
            <section className="hero__section">
                <img className="hero__section--background" src='src/assets/Fuentes del Molino/IMG_8745.jpeg' alt="" />
                <h1 className="hero__section--first-title">Construyendo el futuro de tu proyecto</h1>
                <p className="hero__section--text">Nuestra misión es lograr que ames tu proyecto toda la vida.</p>
                <button className="hero__section--button">Empecemos</button>
            </section>
        </>
    )
};

export default HeroSection;