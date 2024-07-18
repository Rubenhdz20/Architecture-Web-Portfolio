import './AboutUs.css';

function AboutUs() {
    return(
        <section id='about-us' className='about-us'>
            <div className='about-us__text-container'>
                <h2 className='about-us__subtitle'>Vision</h2>
                <p className='about-us__description'>Nuestra visión es ser líderes en el diseño y desarrollo de proyectos arquitectónicos innovadores y sostenibles, mejorando la calidad de vida de nuestras comunidades y dejando un legado duradero en el entorno construido.
                </p>
                <h2 className='about-us__subtitle'>Misión</h2>
                <p className='about-us__description'>Nuestra misión es proporcionar soluciones arquitectónicas de alta calidad que integren creatividad, funcionalidad y sostenibilidad, satisfaciendo las necesidades y expectativas de nuestros clientes y contribuyendo al desarrollo urbano responsable.
                </p>
                <h2 className='about-us__subtitle'>Metas</h2>
                <p className='about-us__description'>•	Crear proyectos arquitectónicos que destaquen por su diseño innovador y su respeto por el medio ambiente.<br></br><br></br>
                •	Mantener un alto estándar de calidad en cada etapa del proceso de diseño y construcción.<br></br><br></br>
                •	Fortalecer las relaciones con nuestros clientes a través de una comunicación transparente y un servicio personalizado.
                </p>
            </div>
            <div className='about-us__cards-container'>
                <div className='about-us__child-cards'>
                    <svg className='about-us__card-svg' viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M19.6488 17.875C18.2209 15.4066 16.0206 13.6366 13.4528 12.7975C16.0635 11.2433 17.3141 8.13638 16.5082 5.2069C15.7022 2.27741 13.0383 0.247449 10 0.247449C6.96167 0.247449 4.29779 2.27741 3.49182 5.2069C2.68585 8.13638 3.93645 11.2433 6.54719 12.7975C3.97938 13.6356 1.77906 15.4056 0.35125 17.875C0.208704 18.1074 0.203527 18.3989 0.337731 18.6363C0.471935 18.8736 0.724375 19.0194 0.997024 19.0171C1.26967 19.0147 1.51958 18.8646 1.64969 18.625C3.41594 15.5725 6.53781 13.75 10 13.75C13.4622 13.75 16.5841 15.5725 18.3503 18.625C18.4804 18.8646 18.7303 19.0147 19.003 19.0171C19.2756 19.0194 19.5281 18.8736 19.6623 18.6363C19.7965 18.3989 19.7913 18.1074 19.6488 17.875ZM4.75 7C4.75 4.1005 7.1005 1.75 10 1.75C12.8995 1.75 15.25 4.1005 15.25 7C15.25 9.8995 12.8995 12.25 10 12.25C7.10179 12.2469 4.7531 9.89821 4.75 7Z" fill="#0D141C"/>
                    </svg>
                    <p className='about-us__card-title'>Servicio Personalizado</p>
                    <p className='about-us__card-description'>Nos interesa conocer a fondo su empresa, su cultura y su visión.</p>
                </div>
                <div className='about-us__child-cards'>
                    <svg className='about-us__card-svg' viewBox="0 0 18 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M17.2303 11.0784C17.1726 10.8343 16.9967 10.6352 16.7616 10.5478L11.3606 8.52188L12.735 1.64719C12.7989 1.31904 12.638 0.988192 12.3403 0.835989C12.0426 0.683786 11.6802 0.746981 11.4516 0.990937L0.951562 12.2409C0.778344 12.4235 0.7082 12.6807 0.764781 12.9259C0.821363 13.1711 0.99713 13.3715 1.23281 13.4597L6.63562 15.4856L5.265 22.3528C5.20107 22.681 5.36205 23.0118 5.65971 23.164C5.95738 23.3162 6.31984 23.253 6.54844 23.0091L17.0484 11.7591C17.2185 11.5766 17.2866 11.3214 17.2303 11.0784ZM7.25344 20.0625L8.235 15.1519C8.30755 14.7922 8.10923 14.4328 7.76625 14.3025L2.8125 12.4416L10.7456 3.94219L9.765 8.85281C9.69245 9.21248 9.89077 9.57184 10.2338 9.70219L15.1838 11.5584L7.25344 20.0625Z" fill="#0D141C"/>
                    </svg>
                    <p className='about-us__card-title'>Diseño innovador</p>
                    <p className='about-us__card-description'>Desarrollamos diseños únicos e innovadores.</p>
                </div>
                <div className='about-us__child-cards'>
                    <svg className='about-us__card-svg' viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M23.375 18.75C23.375 19.2332 22.9832 19.625 22.5 19.625H1.5C1.01675 19.625 0.625 19.2332 0.625 18.75V1.25C0.625 0.766751 1.01675 0.375 1.5 0.375C1.98325 0.375 2.375 0.766751 2.375 1.25V11.5717L7.92359 6.71875C8.23477 6.44635 8.69418 6.42901 9.025 6.67719L15.4573 11.5017L21.9236 5.84375C22.1546 5.61507 22.4934 5.5333 22.8033 5.63141C23.1132 5.72953 23.3431 5.99135 23.4005 6.31132C23.4578 6.63129 23.333 6.95666 23.0764 7.15625L16.0764 13.2812C15.7652 13.5536 15.3058 13.571 14.975 13.3228L8.54266 8.50047L2.375 13.897V17.875H22.5C22.9832 17.875 23.375 18.2668 23.375 18.75Z" fill="#0D141C"/>
                    </svg>
                    <p className='about-us__card-title'>Proceso fluido</p>
                    <p className='about-us__card-description'>Nuestro proceso está diseñado para facilitarle las cosas.</p>
                </div>
                <div className='about-us__child-cards'>
                    <svg className='about-us__card-svg' viewBox="0 0 18 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M13.5 20.75C13.5 21.1642 13.1642 21.5 12.75 21.5H5.25C4.83579 21.5 4.5 21.1642 4.5 20.75C4.5 20.3358 4.83579 20 5.25 20H12.75C13.1642 20 13.5 20.3358 13.5 20.75ZM17.25 8.75C17.2565 11.2836 16.0926 13.6783 14.0963 15.2384C13.723 15.5246 13.5029 15.9672 13.5 16.4375V17C13.5 17.8284 12.8284 18.5 12 18.5H6C5.17157 18.5 4.5 17.8284 4.5 17V16.4375C4.49969 15.9728 4.28398 15.5344 3.91594 15.2506C1.9248 13.6999 0.757338 11.3197 0.75 8.79594C0.725625 4.32781 4.33688 0.606875 8.80125 0.5C11.0235 0.446448 13.1734 1.29194 14.7638 2.84496C16.3542 4.39798 17.2506 6.52709 17.25 8.75ZM15.75 8.75C15.7505 6.93116 15.017 5.18908 13.7157 3.91842C12.4143 2.64775 10.6552 1.95604 8.83687 2C5.18062 2.08625 2.23031 5.13031 2.25 8.78656C2.25694 10.8506 3.21244 12.7969 4.84125 14.0647C5.57354 14.634 6.00133 15.51 6 16.4375V17H12V16.4375C12.0021 15.5074 12.4335 14.6303 13.1691 14.0609C14.8031 12.784 15.7556 10.8238 15.75 8.75ZM14.2397 7.87438C13.8414 5.64954 12.0996 3.90815 9.87469 3.51031C9.46617 3.44145 9.07917 3.71679 9.01031 4.12531C8.94145 4.53383 9.21679 4.92082 9.62531 4.98969C11.1788 5.25125 12.4969 6.56937 12.7603 8.12562C12.8216 8.4863 13.1342 8.75014 13.5 8.75C13.5424 8.74975 13.5847 8.7463 13.6266 8.73969C14.0348 8.67 14.3093 8.28262 14.2397 7.87438Z" fill="#0D141C"/>
                    </svg>
                    <p className='about-us__card-title'>Resultados Satisfactorios</p>
                    <p className='about-us__card-description'>Nuestro objetivo es que termine completamente feliz y satisfecho con su proyecto.</p>
                </div>
             </div>
        </section>
    )
};

export default AboutUs;