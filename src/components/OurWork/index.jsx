import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { ProjectsContext } from '../ProjectContext/index';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './OurWork.css';

function OurWork() {
    const { projects } = useContext(ProjectsContext);

    const settings = {
        dots: true,
        infinite: true,
        speed: 600,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <section id='our-work' className='ourwork'>
            <h1 className='ourwork-title'>Nuestro Trabajo</h1>
            <h2 className='ourwork-subtitle'>Proyectos Realizados</h2>
                <Slider {...settings}>
                    {projects.map((project) => (
                        <div id='unique' className='ourwork-card' key={project.id}>
                            {project.image && ( 
                                <img
                                    className='ourwork-card--image'
                                    src={project.image}
                                    alt={project.name}
                                />
                            )}

                            <div className='ourwork-card--content'>
                                <p className='ourwork-card--name'>{project.name}</p>
                                <p className='ourwork-card--details'>{project.date}</p>
                                <Link className='ourwork-card--link' to={`/project/${project.id}`} state={{ project }}>
                                    <button className='ourwork-card--button'>Ver Detalles</button>
                                </Link>
                            </div>
                        </div>
                    ))}
                </Slider>
        </section>
    )
}

export default OurWork;