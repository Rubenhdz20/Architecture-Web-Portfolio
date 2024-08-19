import './WhatWeDo.css';

function WhatWeDo() {
    return(
        <section id='whatwedo' className='whatwedo'>
            <h1 className='whatwedo__title'>Lo que hacemos</h1>
            <div className='whatwedo__container'>
                <div className='whatwedo__information'>
                    <img className='whatwedo__information--image img1' src="dist/assets/construccion1.jpg" alt="Construction background"/>
                    <p className='whatwedo__information--text p1'>En nuestro servicio de construcción, nos dedicamos a ofrecer soluciones personalizadas y de alta calidad para cada proyecto. Ya sea que requieras la construcción de una nueva edificación o una renovación integral, nuestro equipo de expertos en construcción colaborará estrechamente contigo para asegurar que tu proyecto se complete puntualmente, dentro del presupuesto y con los más altos estándares de calidad.</p>
                </div>
                <div className='whatwedo__information'>
                    <img className='whatwedo__information--image' src="public/assets/remodelacion1.jpg" alt="remodelling image"/>
                    <p className='whatwedo__information--text p2'>Transforme su espacio con nuestro equipo de expertos en remodelación. Nos dedicamos a revitalizar su vivienda, creando ambientes funcionales y estéticamente atractivos. Trabajamos de manera colaborativa para entender su visión y diseñar espacios que se ajusten a sus necesidades y estilo.</p>
                </div>
                <div className='whatwedo__information'>
                    <img className='whatwedo__information--image img1' src="public/assets/design1.jpg" alt="Design Background"/>
                    <p className='whatwedo__information--text p1'>Desde el concepto hasta la finalización: Nuestros servicios de diseño abarcan todo el proceso, desde la lluvia de ideas inicial y la planificación del espacio hasta los planos detallados y la selección de materiales. Nos aseguramos de que su visión del diseño se traduzca a la perfección en un proyecto de remodelación de éxito.</p>
                </div>
                <div className='whatwedo__information'>
                    <img className='whatwedo__information--image' src="public/assets/ampliacion1.jpg" alt="Extension"/>
                    <p className='whatwedo__information--text'>Nuestros especialistas en ampliaciones maximizan su espacio vital con diseños innovadores y funcionales. Dé un nuevo aire a su proyecto y cree un espacio que refleje su estilo único.</p>
                </div>
            </div>
        </section>
    )
};

export default WhatWeDo;

