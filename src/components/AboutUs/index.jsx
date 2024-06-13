import './AboutUs.css';

function AboutUs() {
    return(
        <section className='about-us'>
            <div className='about-us__text-container'>
                <h1 className='about-us__title'>Sobre Nosotros</h1>
                <p className='about-us__description'>Somos una empresa enfocado en la creatividad y calidad de todos sus proyectos, con un servicio único.</p>
            </div>
            <div className='about-us__cards-container'>
                <div className='about-us__child-cards'>
                    <p className='about-us__card-title'>Personalized service</p>
                    <p className='about-us__card-description'>We get to know your  business, culture, and vision.</p>
                </div>
                <div className='about-us__child-cards'>
                    <p className='about-us__card-title'>Innovative design</p>
                    <p className='about-us__card-description'>We create unique, innovative designs that reflect our clients' personality.</p>
                </div>
                <div className='about-us__child-cards'>
                    <p className='about-us__card-title'>Seamless process</p>
                    <p className='about-us__card-description'>Our process is designed to make things easier for you.</p>
                </div>
                <div className='about-us__child-cards'>
                    <p className='about-us__card-title'>Innovative design</p>
                    <p className='about-us__card-description'>We're always looking for new ways to create unique spaces.</p>
                </div>
             </div>
        </section>
    )
};

export default AboutUs;