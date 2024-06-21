import React, { createContext, useState } from 'react';

const ProjectsContext = createContext();

const ProjectsProvider = ({ children }) => {
  const [projects, setProjects] = useState([
    {
      id: 1,
      image: 'public/Fuentes del Molino/42c95218-bba4-4682-95cd-92953c1c86c3.jpeg',
      images: ['../public/Fuentes del Molino/152e950a-1bf8-4322-9b29-b12c27142901.jpeg', '../public/Fuentes del Molino/656cae8c-c841-4a55-b01f-bf1a02dc77ff 2 (1).jpeg'], 
      name: 'Casa Fuentes del Molino',
      date: 'Puebla, Mexico - 2021',
      description: 'Este proyecto se realizo para una casa'
    },
    {
      id: 2,
      image: 'public/Altana/IMG_1159.jpg', 
      images: [''], 
      name: 'Fraccionamiento Altana',
      date: 'Puebla, Mexico - 2021',
      description: 'Este proyecto se realizo para una casa'
    },
    {
      id: 3,
      image: 'public/San Pieri/IMG_1399.jpeg', 
      images: ['src/assets/Fuentes del Molino/42c95218-bba4-4682-95cd-92953c1c86c3.jpeg', 'src/assets/Fuentes del Molino/152e950a-1bf8-4322-9b29-b12c27142901.jpeg','src/assets/Fuentes del Molino/656cae8c-c841-4a55-b01f-bf1a02dc77ff 2 (1).jpeg'], 
      name: 'Fraccionamiento San Pieri',
      date: 'Puebla, Mexico - 2021',
      description: 'Este proyecto se realizo para una casa'
    },
    {
      id: 4,
      image: 'public/Fuentes del Molino/42c95218-bba4-4682-95cd-92953c1c86c3.jpeg', 
      images: ['src/assets/Fuentes del Molino/42c95218-bba4-4682-95cd-92953c1c86c3.jpeg', 'src/assets/Fuentes del Molino/152e950a-1bf8-4322-9b29-b12c27142901.jpeg','src/assets/Fuentes del Molino/656cae8c-c841-4a55-b01f-bf1a02dc77ff 2 (1).jpeg'], 
      name: 'Casa 950',
      date: 'Puebla, Mexico - 2021',
      description: 'Este proyecto se realizo para una casa'
    }
  ]);

  return (
    <ProjectsContext.Provider value={{ projects, setProjects }}>
      {children}
    </ProjectsContext.Provider>
  );
};

export { ProjectsContext, ProjectsProvider };