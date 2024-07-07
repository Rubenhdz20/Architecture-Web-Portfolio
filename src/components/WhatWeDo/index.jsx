import './WhatWeDo.css';

function WhatWeDo() {
    return(
        <section id='whatwedo' className='whatwedo'>
            <h1 className='whatwedo__title'>Lo que hacemos</h1>
            <div className='whatwedo__container'>
                <div className='whatwedo__information'>
                    <img className='whatwedo__information--image img1' src="/assets/construccion1.jpg" alt="Construction background"/>
                    <p className='whatwedo__information--text p1'>En nuestro servicio de construcción, nos enfocamos en brindar soluciones de alta calidad y personalizadas para cada proyecto. Ya sea que necesites construir una nueva edificación o realizar una renovación importante, nuestro equipo de expertos en construcción trabajará contigo para garantizar que tu proyecto se complete a tiempo, dentro del presupuesto y con la calidad esperada.</p>
                </div>
                <div className='whatwedo__information'>
                    <img className='whatwedo__information--image' src="/assets/remodelacion1.jpg" alt="remodelling image"/>
                    <p className='whatwedo__information--text p2'>Transforme su espacio: nos enfocamos en darle un nuevo aire a su vivienda con nuestros expertos servicios de remodelación. Trabajaremos estrechamente con usted para entender su visión y crear un espacio funcional y con estilo que satisfaga sus necesidades.</p>
                </div>
                <div className='whatwedo__information'>
                    <img className='whatwedo__information--image img1' src="/assets/design1.jpg" alt="Design Background"/>
                    <p className='whatwedo__information--text p1'>Desde el concepto hasta la finalización: Nuestros servicios de diseño abarcan todo el proceso, desde la lluvia de ideas inicial y la planificación del espacio hasta los planos detallados y la selección de materiales. Nos aseguramos de que su visión del diseño se traduzca a la perfección en un proyecto de remodelación de éxito.</p>
                </div>
                <div className='whatwedo__information'>
                    <img className='whatwedo__information--image' src="/assets/ampliacion1.jpg" alt="Extension"/>
                    <p className='whatwedo__information--text'>Nuestros especialistas en ampliaciones maximizan su espacio vital con diseños innovadores y funcionales. Dé un nuevo aire a su proyecto y cree un espacio que refleje su estilo único.</p>
                </div>
            </div>
        </section>
    )
};

export default WhatWeDo;