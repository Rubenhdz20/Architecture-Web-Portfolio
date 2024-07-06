import './WhatWeDo.css';

function WhatWeDo() {
    return(
        <section id='whatwedo' className='whatwedo'>
            <h1 className='whatwedo__title'>Lo que hacemos</h1>
            <div className='whatwedo__container'>
                <div className='whatwedo__information'>
                    <img className='whatwedo__information--image img1' src="public/assets/construccion2.jpg" alt="Construction background"/>
                    <p className='whatwedo__information--text p1'>En nuestro servicio de construcción, nos enfocamos en brindar soluciones de alta calidad y personalizadas para cada proyecto. Ya sea que necesites construir una nueva edificación o realizar una renovación importante, nuestro equipo de expertos en construcción trabajará contigo para garantizar que tu proyecto se complete a tiempo, dentro del presupuesto y con la calidad esperada.</p>
                </div>
                <div className='whatwedo__information'>
                    <img className='whatwedo__information--image' src="/assets/remodelacion.jpg" alt="remodelling image"/>
                    <p className='whatwedo__information--text p2'>We believe that the interior design is a natural  extension of the architecture. Our team provides full-service interior design for both residential and commercial spaces.</p>
                </div>
                <div className='whatwedo__information'>
                    <img className='whatwedo__information--image img1' src="/assets/design2.jpg" alt="Design Background"/>
                    <p className='whatwedo__information--text p1'>Our team designs custom furniture pieces for our clients, ensuring each piece is tailored to the space it will inhabit and the lifestyle of its owner</p>
                </div>
                <div className='whatwedo__information'>
                    <img className='whatwedo__information--image' src="/assets/ampliacion.jpg" alt="Extension"/>
                    <p className='whatwedo__information--text'>Our team designs custom furniture pieces for our clients, ensuring each piece is tailored to the space it will inhabit and the lifestyle of its owner</p>
                </div>
            </div>
        </section>
    )
};

export default WhatWeDo;