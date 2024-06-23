import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { ProjectsContext } from '../ProjectContext/index';
import './OurWork.css';

function OurWork() {
    const { projects, setProjects } = useContext(ProjectsContext);

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
                        <p className='ourwork-card--details'>{project.date}</p>
                        <Link className='ourwork-card--link' to={`/project/${project.id}`} state={{ project }}>
                            <button className='ourwork-card--button'>Ver Detalles</button>
                        </Link>
                    </div>
                </div>
                ))}
            </div>
        </section>
    )
}

export default OurWork;