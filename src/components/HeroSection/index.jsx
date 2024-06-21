import './HeroSection.css'

function HeroSection() {
    return(
        <>
            <nav className="hero__nav">
                <h2 className="hero__nav--second-title">Mariana Arquitectos</h2>
            </nav>
            <section className="hero__section">
                <img className="hero__section--background" src='public/assets/background 3.jpeg' alt="" />
                <h1 className="hero__section--first-title">Construyendo el futuro de tu proyecto</h1>
                <button className="hero__section--button">Empecemos</button>
            </section>
        </>
    )
};

export default HeroSection;