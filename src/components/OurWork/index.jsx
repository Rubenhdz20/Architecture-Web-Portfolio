import React, { useState } from 'react';
import './OurWork.css';
import { Link, Route, Routes } from 'react-router-dom';

function OurWork(props) {
    const [projects, setProjects] = useState([
        // Define your project data here
        {
          id: 1,
          image: 'src/assets/Fuentes del Molino/IMG_9791.jpeg', // Main project image (optional)
          name: 'Casa Fuentes del Molino',
          description: 'Puebla, Mexico - 2021',
        },
        {
          id: 2,
          image: 'src/assets/Fuentes del Molino/IMG_9791.jpeg', // Main project image (optional)
          name: 'Casa Fuentes del Molino',
          description: 'Puebla, Mexico - 2021',
        }
    ]);

    const handleProjectClick = (projectId) => {
        // No need for window.location.href
    };

    return (
        <section className='ourwork'>
            <h1 className='ourwork-title'>Nuestro Trabajo</h1>
            <h2 className='ourwork-subtitle'>Proyectos Realizados</h2>
            <div className='ourwork-container'>
                {projects.map((project) => (
                <div className='ourwork-card' key={project.id}>
                    {project.image && ( // Conditionally render main project image
                    <img
                        className='ourwork-card--image'
                        src={project.image}
                        alt={project.name}
                    />
                    )}
                    <div className='ourwork-card--content'>
                        <p className='ourwork-card--name'>{project.name}</p>
                        <p className='ourwork-card--details'>{project.description}</p>
                        {/* <Link to={`/project/${project.id}`}>
                            <button>View Details</button>
                        </Link> */}
                    </div>
                </div>
                ))}
            </div>
    
        </section>
    )
}

export default OurWork;