import React, { useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import ProjectDetails from '../ProjectDetails';
import './OurWork.css';

function OurWork() {
    const [projects, setProjects] = useState([
        {
          id: 1,
          image: 'src/assets/Fuentes del Molino/IMG_9791.jpeg',
          images: ['src/assets/Fuentes del Molino/42c95218-bba4-4682-95cd-92953c1c86c3.jpeg', 'src/assets/Fuentes del Molino/152e950a-1bf8-4322-9b29-b12c27142901.jpeg','src/assets/Fuentes del Molino/656cae8c-c841-4a55-b01f-bf1a02dc77ff 2 (1).jpeg'], 
          name: 'Casa Fuentes del Molino',
          description: 'Puebla, Mexico - 2021',
        },
        {
          id: 2,
          image: 'src/assets/Altana/IMG_1159.jpg', 
          images: ['src/assets/Fuentes del Molino/42c95218-bba4-4682-95cd-92953c1c86c3.jpeg', 'src/assets/Fuentes del Molino/152e950a-1bf8-4322-9b29-b12c27142901.jpeg','src/assets/Fuentes del Molino/656cae8c-c841-4a55-b01f-bf1a02dc77ff 2 (1).jpeg'], 
          name: 'Fraccionamiento Altana',
          description: 'Puebla, Mexico - 2021',
        },
        {
          id: 3,
          image: 'src/assets/San Pieri/IMG_1399.jpeg', 
          images: ['src/assets/Fuentes del Molino/42c95218-bba4-4682-95cd-92953c1c86c3.jpeg', 'src/assets/Fuentes del Molino/152e950a-1bf8-4322-9b29-b12c27142901.jpeg','src/assets/Fuentes del Molino/656cae8c-c841-4a55-b01f-bf1a02dc77ff 2 (1).jpeg'], 
          name: 'Fraccionamiento San Pieri',
          description: 'Puebla, Mexico - 2021',
        },
        {
          id: 4,
          image: 'src/assets/Fuentes del Molino/IMG_9791.jpeg', 
          images: ['src/assets/Fuentes del Molino/42c95218-bba4-4682-95cd-92953c1c86c3.jpeg', 'src/assets/Fuentes del Molino/152e950a-1bf8-4322-9b29-b12c27142901.jpeg','src/assets/Fuentes del Molino/656cae8c-c841-4a55-b01f-bf1a02dc77ff 2 (1).jpeg'], 
          name: 'Casa 950',
          description: 'Puebla, Mexico - 2021',
        }
    ]);

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
                        <Link to={`/project/${project.id}`}>
                            <button>Ver Detalles</button>
                        </Link>
                    </div>
                </div>
                ))}
            </div>
            <Routes>
                <Route path='/project/:projectId' element={
                    () => {
                    const { projectId } = useParams(); // Destructure projectId from useParams
                    const selectedProject = projects.find(project => project.id === +projectId);
                    return <ProjectDetails project={selectedProject} />;
                    }
                } />
            </Routes>

        </section>
    )
}

export default OurWork;