import './AboutUs.css';

function AboutUs() {
    return(
        <section id='about-us' className='about-us'>
            <div className='about-us__text-container'>
                <h1 className='about-us__title'>Sobre Nosotros</h1>
                <p className='about-us__description'>Somos una empresa enfocado en la creatividad y calidad de todos sus proyectos, con un servicio único.</p>
            </div>
            <div className='about-us__cards-container'>
                <div className='about-us__child-cards'>
                    <svg className='about-us__card-svg' viewBox="0 0 18 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M17.2303 11.0784C17.1726 10.8343 16.9967 10.6352 16.7616 10.5478L11.3606 8.52188L12.735 1.64719C12.7989 1.31904 12.638 0.988192 12.3403 0.835989C12.0426 0.683786 11.6802 0.746981 11.4516 0.990937L0.951562 12.2409C0.778344 12.4235 0.7082 12.6807 0.764781 12.9259C0.821363 13.1711 0.99713 13.3715 1.23281 13.4597L6.63562 15.4856L5.265 22.3528C5.20107 22.681 5.36205 23.0118 5.65971 23.164C5.95738 23.3162 6.31984 23.253 6.54844 23.0091L17.0484 11.7591C17.2185 11.5766 17.2866 11.3214 17.2303 11.0784ZM7.25344 20.0625L8.235 15.1519C8.30755 14.7922 8.10923 14.4328 7.76625 14.3025L2.8125 12.4416L10.7456 3.94219L9.765 8.85281C9.69245 9.21248 9.89077 9.57184 10.2338 9.70219L15.1838 11.5584L7.25344 20.0625Z" fill="#0D141C"/>
                    </svg>
                    <p className='about-us__card-title'>Servicio Personalizado</p>
                    <p className='about-us__card-description'>We get to know your  business, culture, and vision.</p>
                </div>
                <div className='about-us__child-cards'>
                    <svg className='about-us__card-svg' viewBox="0 0 18 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M17.2303 11.0784C17.1726 10.8343 16.9967 10.6352 16.7616 10.5478L11.3606 8.52188L12.735 1.64719C12.7989 1.31904 12.638 0.988192 12.3403 0.835989C12.0426 0.683786 11.6802 0.746981 11.4516 0.990937L0.951562 12.2409C0.778344 12.4235 0.7082 12.6807 0.764781 12.9259C0.821363 13.1711 0.99713 13.3715 1.23281 13.4597L6.63562 15.4856L5.265 22.3528C5.20107 22.681 5.36205 23.0118 5.65971 23.164C5.95738 23.3162 6.31984 23.253 6.54844 23.0091L17.0484 11.7591C17.2185 11.5766 17.2866 11.3214 17.2303 11.0784ZM7.25344 20.0625L8.235 15.1519C8.30755 14.7922 8.10923 14.4328 7.76625 14.3025L2.8125 12.4416L10.7456 3.94219L9.765 8.85281C9.69245 9.21248 9.89077 9.57184 10.2338 9.70219L15.1838 11.5584L7.25344 20.0625Z" fill="#0D141C"/>
                    </svg>
                    <p className='about-us__card-title'>Innovative design</p>
                    <p className='about-us__card-description'>We create unique, innovative designs.</p>
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