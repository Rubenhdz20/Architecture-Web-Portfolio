import './WhatWeDo.css';

function WhatWeDo() {
    return(
        <section className='whatwedo'>
            <h1 className='whatwedo__title'>Lo que hacemos</h1>
            <div className='whatwedo__container'>
                <div className='whatwedo__information'>
                    <img className='whatwedo__information--image' src="src/assets/architecture.jpg" alt="" />
                    <p className='whatwedo__information--text'>Our team has a strong background in architecture and design, working on projects that range from single-family homes to large-scale commercial buildings.</p>
                </div>
                <div className='whatwedo__information'>
                    <img className='whatwedo__information--image' src="" alt="" />
                    <p className='whatwedo__information--subtitle'>Interior Design</p>
                    <p className='whatwedo__information--text'>We believe that the interior design is a natural  extension of the architecture. Our team provides full-service interior design for both residential and commercial spaces.</p>
                </div>
                <div className='whatwedo__information'>
                    <img className='whatwedo__information--image' src="" alt="" />
                    <p className='whatwedo__information--subtitle'>Drawings</p>
                    <p className='whatwedo__information--text'>Our team designs custom furniture pieces for our clients, ensuring each piece is tailored to the space it will inhabit and the lifestyle of its owner</p>
                </div>
            </div>
        </section>
    )
};

export default WhatWeDo;